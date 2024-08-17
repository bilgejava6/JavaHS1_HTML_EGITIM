/**
 * DİKKAT!!!!
 * Interface ler, java daki sınıflara benzer şekilde kullanılırlar ve template
 * tanımlamak için kullanılırlar.
 */
export interface IMusteri{
    id: number,
    ad: string,
    telefon: string,
    active: boolean,
    soyad?: string,
    resim?: string
}