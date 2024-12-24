import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencies: any[] = [];
  filteredCurrencies: any[] = [];
  searchQuery: string = '';
  searchCriteria: string = 'currencyname';
  newCurrency = { currencyname: '', currencycode: '', date: new Date(), isEditing: false };

  private apiUrl = 'http://localhost:5190/api/currency'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadCurrencies();
  }

  loadCurrencies(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      console.log('Currencies loaded:', data); // Log the data
      this.currencies = data;
      this.filteredCurrencies = [...data]; // Use spread operator to create a copy of the data
    }, error => {
      console.error('Error loading currencies:', error); // Log any errors
    });
  }

  filterTable(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredCurrencies = this.currencies.filter(currency => {
      if (this.searchCriteria === 'currencyname') {
        return currency.currencyname.toLowerCase().includes(query);
      } else if (this.searchCriteria === 'currencycode') {
        return currency.currencycode.toLowerCase().includes(query);
      } else if (this.searchCriteria === 'date') {
        return new Date(currency.date).toDateString().toLowerCase().includes(query);
      }
      return false;
    });
  }

  editCurrency(currency: any): void {
    currency.isEditing = true;
  }

  saveCurrency(currency: any): void {
    this.http.put(`${this.apiUrl}/${currency.id}`, currency).subscribe(() => {
      currency.isEditing = false;
      console.log('Currency saved', currency);
    }, error => {
      console.error('Error saving currency:', error); // Log any errors
    });
  }

  addCurrency(): void {
    this.http.post(this.apiUrl, this.newCurrency).subscribe((currency: any) => {
      console.log('Currency added:', currency); // Log the added currency
      this.currencies.push({ ...currency, isEditing: false });
      this.newCurrency = { currencyname: '', currencycode: '', date: new Date(), isEditing: false };
      this.filterTable();
    }, error => {
      console.error('Error adding currency:', error); // Log any errors
    });
  }

  deleteCurrency(id: number, index: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.currencies.splice(index, 1);
      this.filterTable();
    }, error => {
      console.error('Error deleting currency:', error); // Log any errors
    });
  }
}
