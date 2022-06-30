export interface ITurnAround {
    customerNames:   string;
    orderDate:       Date;
    orderValue:      string;
    shopName:        string;
    zoneName:        ZoneName;
    dispatchDate:    Date;
    returnDate:      Date;
    timeTarget:      TimeTarget;
    deliveredWithin: string;
}

export interface CustomObj {
    shopName:   string;
    orderValue:   number;
  
}


export enum TimeTarget {
    OffTarget = "Off Target",
    OnTarget = "On Target",
}

export enum ZoneName {
    Allsops = "Allsops ",
    Bahati = "Bahati",
    DagorettiSouth = "Dagoretti South",
    Dandora = "Dandora",
    Donholm = "Donholm",
    Eastleigh = "Eastleigh",
    EmbakasiVillage = "Embakasi Village",
    Fedha = "Fedha",
    Githurai44 = "Githurai 44",
    Huruma = "Huruma",
    Kabete = "Kabete",
    Kabiria = "Kabiria",
    KahawaWest = "Kahawa West",
    Kangemi = "Kangemi",
    KangundoRoad = "Kangundo Road",
    KariobangiSouth = "Kariobangi South",
    Kawangware = "Kawangware",
    Kayole = "Kayole",
    KayoleC = "Kayole C",
    Kibera = "Kibera",
    Kinoo = "Kinoo",
    Kiserian = "Kiserian",
    Kware = "Kware",
    Langata = "Langata",
    LuckySummerB = "Lucky Summer B",
    Mlolongo = "Mlolongo",
    NairobiWest = "Nairobi West",
    Ngong = "Ngong",
    Other = "Other",
    Pipeline = "Pipeline",
    Rongai = "Rongai",
    Ruaka = "Ruaka",
    Ruiru = "Ruiru",
    SouthB = "South B",
    SouthC = "South C",
    Tasia = "Tasia",
    Umoja = "Umoja",
    Umoja3 = "Umoja 3",
    Utawala = "Utawala",
    Wangige = "Wangige",
}
