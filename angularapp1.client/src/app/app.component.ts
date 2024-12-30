import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchQuery: string = '';
  constructor(public authService: AuthService, private renderer: Renderer2) { }


  onSearch(): void {
    // Clear previous highlights
   // this.clearHighlights();

    if (this.searchQuery.trim() === '') {
      return;
    }

    // Highlight the search query
    this.highlightSearchQuery(this.searchQuery);
  }

  highlightSearchQuery(query: string): void {
    const bodyText = document.body.innerHTML;
    const regex = new RegExp(`(${query})`, 'gi');
    const newText = bodyText.replace(regex, '<span class="highlight">$1</span>');
    document.body.innerHTML = newText;
  }

  //clearHighlights(): void {
  //  const highlightedElements = document.querySelectorAll('.highlight');
  //  highlightedElements.forEach(element => {
  //    const parent = element.parentNode;
  //    parent.replaceChild(document.createTextNode(element.textContent), element);
  //    parent.normalize();
  //  });
  //}

  logout() {
    this.authService.logout();
  }


}



