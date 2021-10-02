export class Clients {
    id?: string;
    name: string;
    cpf: string;
    rg: string;
    birthdate?: string;
    address?: string;
    complement?: string;
    district: string;
    cep: string;
    city: string;
    uf: string;
    phone?: string;
    cellphone: string;
    observation?: string;

    constructor(id: string, name: string, cpf: string, rg: string, birthdate: string, address: string, complement: string, district: string, cep: string, city: string, uf: string, phone: string, cellphone: string, observation: string, ){
      this.id = id; 
      this.name = name;
      this.cpf = cpf;
      this.address = address;
      this.rg = rg;
      this.birthdate = birthdate;
      this.complement = complement;
      this.district = district;
      this.cep = cep;
      this.city = city;
      this.uf = uf;
      this.phone = phone;
      this.cellphone = cellphone;
      this.observation = observation;
    }
    
  }
  