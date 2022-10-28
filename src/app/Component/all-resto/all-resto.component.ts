import { ImageLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestoService } from '../../Services/resto/resto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-resto',
  templateUrl: './all-resto.component.html',
  styleUrls: ['./all-resto.component.css']
})



export class AllRestoComponent implements OnInit {
  data: any = {};
  form: any = {
    name: null,
    description: null,
    logo: null,
  };

  toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async updateImageFile(event: any) {
    const file: File = event.target.files[0];
    const fileBase64 = await this.toBase64(file);
    this.form.logo = fileBase64;
  }

  constructor(private resto: RestoService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { name, description, logo } = this.form;

      this.resto
      .getAll(name, description, logo)
      .subscribe({
        next: (data) => {
          this.data = data;
          console.log(this.data);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {

        },
      });
  }
}
