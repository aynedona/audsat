export interface Users {
  id: number,
  name: String,
  username: String,
  email: String,
  address: Address,
  phone: String,
  website: String,
  company: Company,
}

export interface Address {
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: GeoLocation
}

export interface GeoLocation {
  lat: String,
  lng: String
}

export interface Company {
  name: String,
  catchPhrase: String,
  bs: String,
}
