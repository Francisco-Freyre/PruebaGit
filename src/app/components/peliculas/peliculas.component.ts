import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<any>;

  constructor() { 
    this.peliculas = [
      { title: "Spiderman 1", image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwipy.tv%2Fposter-de-spider-man-3%2F&psig=AOvVaw0ybfE6qh73k-NZTOkb8gpZ&ust=1580849148782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDxuZKgtucCFQAAAAAdAAAAABAE'},
      { title: "Spiderman 2", image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwipy.tv%2Fposter-de-spider-man-3%2F&psig=AOvVaw0ybfE6qh73k-NZTOkb8gpZ&ust=1580849148782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDxuZKgtucCFQAAAAAdAAAAABAE'},
      { title: "Spiderman 3", image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwipy.tv%2Fposter-de-spider-man-3%2F&psig=AOvVaw0ybfE6qh73k-NZTOkb8gpZ&ust=1580849148782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDxuZKgtucCFQAAAAAdAAAAABAE'},
      { title: "Spiderman 4", image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwipy.tv%2Fposter-de-spider-man-3%2F&psig=AOvVaw0ybfE6qh73k-NZTOkb8gpZ&ust=1580849148782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDxuZKgtucCFQAAAAAdAAAAABAE'},
      { title: "Spiderman 5", image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwipy.tv%2Fposter-de-spider-man-3%2F&psig=AOvVaw0ybfE6qh73k-NZTOkb8gpZ&ust=1580849148782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDxuZKgtucCFQAAAAAdAAAAABAE'}
    ];
  }

  ngOnInit() {
  }

}
