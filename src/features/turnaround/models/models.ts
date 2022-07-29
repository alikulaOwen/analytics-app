export interface TurnAround {
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

export enum TimeTarget {
    OffTarget = "Off Target",
    OnTarget = "On Target",
}

export enum ZoneName {
    Allsops = "Allsops ",
    Bahati = "Bahati",
    Banana = "Banana",
    Cbd = "CBD",
    DagorettiSouth = "Dagoretti South",
    Dandora = "Dandora",
    Donholm = "Donholm",
    Eastleigh = "Eastleigh",
    EmbakasiVillage = "Embakasi Village",
    Fedha = "Fedha",
    Githura45 = "Githura 45",
    Githurai44 = "Githurai 44",
    Huruma = "Huruma",
    Kabete = "Kabete",
    Kabiria = "Kabiria",
    KahawaWest = "Kahawa West",
    Kangemi = "Kangemi",
    KangundoRoad = "Kangundo Road",
    KariobangiNorth = "Kariobangi North",
    KariobangiSouth = "Kariobangi South",
    Kawangware = "Kawangware",
    Kayole = "Kayole",
    KayoleC = "Kayole C",
    KayoleJunction = "Kayole Junction",
    Kibera = "Kibera",
    Kinoo = "Kinoo",
    Kiserian = "Kiserian",
    Komarock = "Komarock",
    Kware = "Kware",
    Langata = "Langata",
    LowerKabete = "Lower Kabete",
    LuckySummerB = "Lucky Summer B",
    Mlolongo = "Mlolongo",
    NairobiWest = "Nairobi West",
    Ngara = "Ngara",
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
