import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencies = [
    { currencyname: 'US Dollar', currencycode: 'USD', date: new Date(), isEditing: false },
    { currencyname: 'Euro', currencycode: 'EUR', date: new Date(), isEditing: false },
    { currencyname: 'Japanese Yen', currencycode: 'JPY', date: new Date(), isEditing: false },
    // Add more currency data here
  ];
  filteredCurrencies = this.currencies;
  searchQuery: string = '';
  searchCriteria: string = 'currencyname';
  newCurrency = { currencyname: '', currencycode: '', date: new Date(), isEditing: false };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }

  filterTable(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredCurrencies = this.currencies.filter(currency => {
      if (this.searchCriteria === 'currencyname') {
        return currency.currencyname.toLowerCase().includes(query);
      } else if (this.searchCriteria === 'currencycode') {
        return currency.currencycode.toLowerCase().includes(query);
      } else if (this.searchCriteria === 'date') {
        return currency.date.toDateString().toLowerCase().includes(query);
      }
      return false;
    });
  }

  editCurrency(currency: any): void {
    currency.isEditing = true;
  }

  saveCurrency(currency: any): void {
    currency.isEditing = false;
    console.log('Currency saved', currency);
    // Add logic to save the currency data, e.g., send it to the server
  }

  addCurrency(): void {
    this.currencies.push({ ...this.newCurrency, date: new Date(), isEditing: false });
    this.newCurrency = { currencyname: '', currencycode: '', date: new Date(), isEditing: false };
    this.filterTable();
  }

  deleteCurrency(index: number): void {
    this.currencies.splice(index, 1);
    this.filterTable();
  }
}
