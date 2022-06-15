export interface Icredentials {
  username: string
  password: string
}

export interface Isession {
  displayName: string | null
  email: string | null
  phoneNumber: string | null
  photoURL: string | null
  role: string
  uid: string
  id: string | null
}
