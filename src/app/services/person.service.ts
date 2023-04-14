import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Person } from '../models/Person';
import { PEOPLE } from '../mock-people';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:3000/people'

  constructor(private httpClient: HttpClient) {}

  // getPeople(): Person[] {
  //   return PEOPLE;
  // }

  getPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiUrl);
  }

  deletePerson(id: number): Observable<Person> {
    return this.httpClient.delete<Person>(`${this.apiUrl}/${id}`)
  }

  addPerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.apiUrl, person, httpOptions);
  }
}
