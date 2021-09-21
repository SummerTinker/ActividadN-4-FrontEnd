import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  constructor(private alumnoService:AlumnoService) { }

  alumno: Alumno = { }


  saveAlumno(){

    console.log(">> saveAlumno ");
    console.log(this.alumno);

    this.alumnoService.create(this.alumno).subscribe(
      //se programa la respuesta cuando es exitosa
      response =>{

        console.log(response.mensaje);
        alert(response.mensaje)
        
      },

      // cuando es error
      error =>{console.log(error);
      }
    );


  }


  ngOnInit(): void {
  }

}
