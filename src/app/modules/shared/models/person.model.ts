export default interface Person {
    avatar: string,
    firstname: string,
    middlename?: string,
    lastname: string,
    lastname2?: string,
    idType: 'id' | 'passport' | 'rnc' | 'other',
    id: number,
    email?: string,
    phone: string,
    sex: 'male' | 'female',
    dob: Date,
    placeOfBirth?: string,
    address?: string,
    residence?: string,
    sector?: string,
    celular: string,
    academicYear: 2020 | 2021 | 2022,
    workingHours: 'weekend' | 'morning' | 'afternoon' | 'night',
    grade: 'sexto' | 'septimo'
}