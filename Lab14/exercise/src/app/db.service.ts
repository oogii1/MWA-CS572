import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }

  getData(): { id: string, name: string, stuID: string, email: string }[] {
    return [
      { id: 'ID1', name: 'Joy Steve', stuID: '123', email: 'email1@mum.edu' },
      { id: 'ID2', name: 'Tamir GGG', stuID: '234', email: 'email2@mum.edu' },
      { id: 'ID3', name: 'Eta GGGGG', stuID: '345', email: 'email3@mum.edu' },
      { id: 'ID4', name: 'Noname GG', stuID: '456', email: 'email4@mum.edu' }
    ];
  }

}
