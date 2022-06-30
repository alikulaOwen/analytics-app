export interface SaleSummary {
    zoneName:               string;
    productName:            null;
    orderPrice:             null;
    quantity:               null;
    customerNames:          string;
    mobileNumber:           null;
    shopName:               string;
    orderNumber:            string;
    zone:                   null;
    runsheet:               string;
    returnedCash:           string;
    reconsolidationComment: null;
    dispatchDate:           Date;
    returnDate:             Date;
    driverName:             DriverName;
    orderDate:              Date;
    orderValue:             string;
}

export enum DriverName {
    EvansMacariaKCW941M = "Evans Macaria (KCW 941M)",
    GillianKalonduSalesAgent = "Gillian Kalondu Sales Agent",
    MusunzaRM = "Musunza  RM",
    PhelisterAwourSalesAgent = "Phelister Awour Sales Agent",
}
