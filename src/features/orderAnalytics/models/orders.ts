export interface Order {
    totalItemCount:           number;
    page:                     number;
    pageCount:                number;
    accessibleTotalItemCount: number;
    accessiblePageCount:      number;
    items:                    OrdersItem[];
}

export interface OrdersItem {
    id:                       ID;
    createdTime:              Date;
    updatedTime:              Date;
    isDeleted:                boolean;
    isArchived:               boolean;
    isEnabled:                boolean;
    type:                     string;
    orderNumber:              ID;
    customer:                 Created;
    shop:                     Shop;
    zone:                     Zone;
    geoLocation:              GeoLocation;
    address:                  Address;
    driver:                   Created;
    coupon:                   Coupon;
    isEdited:                 boolean;
    isStocked:                boolean;
    paymentStatus:            string;
    payments:                 Payment[];
    isFavourite:              boolean;
    isCanceled:               boolean;
    isDelivered:              boolean;
    preferredDeliveryTimeUtc: Date;
    deliveryTimeUtc:          Date;
    isCollected:              boolean;
    collectedTimeUtc:         Date;
    note:                     ID;
    items:                    FluffyItem[];
    ratings:                  Rating[];
    complaints:               Complaint[];
    failedCounter:            number;
    totalVolume:              number;
    totalWeight:              number;
    totalPrice:               number;
    totalCash:                number;
    totalWallet:              number;
    totalMPesa:               number;
    totalCredit:              number;
    totalQuantity:            number;
    uniqueItems:              number;
    status:                   string;
    deliverable:              boolean;
    created:                  Created;
    assignedRunsheet:         AssignedRunsheet;
}

export interface Address {
    street:       ID;
    streetNumber: ID;
    zip:          ID;
    quarter:      ID;
    locality:     ID;
    commune:      ID;
    district:     ID;
    state:        ID;
    stateShort:   ID;
    countryCode:  ID;
    landId:       LandID;
}

export enum ID {
    String = "string",
}

export interface LandID {
    parcelNumber:     ID;
    bfsNumber:        number;
    cadastreDistrict: number;
}

export interface AssignedRunsheet {
    id:                     ID;
    createdTime:            Date;
    updatedTime:            Date;
    isDeleted:              boolean;
    isArchived:             boolean;
    isEnabled:              boolean;
    runsheetNumber:         ID;
    solicitingSet:          SolicitingSet;
    status:                 string;
    dispatchTimeUtc:        Date;
    returnTimeUtc:          Date;
    doneTimeUtc:            Date;
    returnedCash:           number;
    reconsolidationComment: ID;
    progress:               number;
    tasks:                  Task[];
    zones:                  Zone[];
    zonesString:            ID;
    totalVolume:            number;
    totalWeight:            number;
    itemsToBring:           number;
    totalMoney:             number;
    totalCash:              number;
    totalWallet:            number;
    totalMPesa:             number;
    totalCredit:            number;
    created:                Ated;
    reconsolidated:         Ated;
}

export interface Ated {
    id:             ID;
    createdTime:    Date;
    updatedTime:    Date;
    isDeleted:      boolean;
    isArchived:     boolean;
    isEnabled:      boolean;
    firstName:      ID;
    lastName:       ID;
    role:           Role;
    email:          ID;
    emailConfirmed: boolean;
    photoPath:      ID;
}

export enum Role {
    RegularUser = "RegularUser",
}

export interface SolicitingSet {
    id:               ID;
    createdTime:      Date;
    updatedTime:      Date;
    isDeleted:        boolean;
    isArchived:       boolean;
    isEnabled:        boolean;
    number:           ID;
    items:            SolicitingSetItem[];
    totalVolume:      number;
    totalWeight:      number;
    totalPrice:       number;
    totalQuantity:    number;
    uniqueItems:      number;
    status:           string;
    zones:            Zone[];
    zonesString:      ID;
    solicitingOrders: number;
}

export interface SolicitingSetItem {
    item:             PurpleItem;
    startingQuantity: number;
    quantity:         number;
    returnedQuantity: number;
    note:             ID;
    isDone:           boolean;
}

export interface PurpleItem {
    id:               ID;
    createdTime:      Date;
    updatedTime:      Date;
    isDeleted:        boolean;
    isArchived:       boolean;
    isEnabled:        boolean;
    uid:              ID;
    name:             ID;
    description:      ID;
    manufacturer:     Manufacturer;
    brand:            Complaint;
    width:            number;
    height:           number;
    length:           number;
    sizeUnit:         ID;
    volume:           number;
    weight:           number;
    weightUnit:       ID;
    marker:           string;
    category:         Complaint;
    price:            number;
    isFastMoving:     boolean;
    photos:           Photo[];
    defaultPhotoPath: ID;
    packaging:        Packaging[];
    displayPackaging: Packaging;
    stock:            Stock[];
    purchasePrice:    number;
    stockSku:         ID;
    stockQuantity:    number;
    activeOrders:     number;
}

export interface Complaint {
    id:                  ID;
    createdTime:         Date;
    updatedTime:         Date;
    isDeleted:           boolean;
    isArchived:          boolean;
    isEnabled:           boolean;
    name?:               ID;
    description?:        ID;
    photoPath?:          ID;
    productCount?:       number;
    subCategoriesCount?: number;
    note?:               ID;
    phoneNumber?:        ID;
    methodType?:         string;
}

export interface Packaging {
    level:         number;
    name:          ID;
    price:         number;
    quantity:      number;
    isSellingItem: boolean;
    isDisplayItem: boolean;
}

export interface Manufacturer {
    id:            ID;
    createdTime:   Date;
    updatedTime:   Date;
    isDeleted:     boolean;
    isArchived:    boolean;
    isEnabled:     boolean;
    name:          ID;
    photoPath:     ID;
    contactInfo:   ContactInfo;
    contactPerson: ContactPerson;
    address:       Address;
    brands:        Complaint[];
    categories:    Complaint[];
    subCategories: Complaint[];
    status:        string;
}

export interface ContactInfo {
    workPhone:               ID;
    mobilePhone:             ID;
    mobilePhoneAccountTypes: string;
    fax:                     ID;
    email:                   string;
    skypeName:               ID;
    websiteUrl:              ID;
}

export interface ContactPerson {
    firstName:  ID;
    lastName:   ID;
    salutation: ID;
    title:      ID;
    gender:     string;
}

export interface Photo {
    photoPath: ID;
    isDefault: boolean;
}

export interface Stock {
    id:          ID;
    createdTime: Date;
    updatedTime: Date;
    isDeleted:   boolean;
    isArchived:  boolean;
    isEnabled:   boolean;
    warehouseId: ID;
    sku:         ID;
    quantity:    number;
}

export interface Zone {
    id:             ID;
    createdTime:    Date;
    updatedTime:    Date;
    isDeleted:      boolean;
    isArchived:     boolean;
    isEnabled:      boolean;
    name:           string;
    description:    ID;
    geoRestriction: GeoRestriction[];
    deliverable:    boolean;
    isVisible:      boolean;
    rank:           number;
    neighbourhoods: Complaint[];
}

export interface GeoRestriction {
    key:   ID;
    name:  ID;
    color: ID;
    geom:  Geom;
}

export interface Geom {
}

export interface Task {
    id:             ID;
    createdTime:    Date;
    updatedTime:    Date;
    isDeleted:      boolean;
    isArchived:     boolean;
    isEnabled:      boolean;
    status:         string;
    note:           ID;
    instructions:   ID;
    callCount:      number;
    messageCount:   number;
    runsheetId:     ID;
    runsheetNumber: ID;
}

export interface Coupon {
    id:                ID;
    createdTime:       Date;
    updatedTime:       Date;
    isDeleted:         boolean;
    isArchived:        boolean;
    isEnabled:         boolean;
    oneUse:            boolean;
    discount:          number;
    discountType:      string;
    description:       ID;
    code:              ID;
    isUsed:            boolean;
    expirationTimeUtc: Date;
}

export interface Created {
    id:                         ID;
    createdTime:                Date;
    updatedTime:                Date;
    isDeleted:                  boolean;
    isArchived:                 boolean;
    isEnabled:                  boolean;
    fullName:                   ID;
    firstName:                  ID;
    lastName:                   ID;
    role:                       string;
    mobilePhone:                ID;
    photoPath:                  ID;
    vehicle:                    ID;
    maxVolume:                  number;
    maxWeight:                  number;
    shopsNumber:                number;
    activeOrdersNumber:         number;
    allOrdersNumber:            number;
    driverNeighbourhoods:       Complaint[];
    driverNeighbourhoodsString: ID;
    status:                     string;
    wallet:                     number;
    walletReserved:             number;
    performanceRating:          number;
    satisfactionRating:         number;
    tasksCompleted:             number;
    hubRank:                    number;
    driverLevel:                string;
    assignedRunsheet:           AssignedRunsheet;
}

export interface GeoLocation {
    latitude:  number;
    longitude: number;
}

export interface FluffyItem {
    item:                  PurpleItem;
    orderedQuantity:       number;
    quantity:              number;
    isDone:                boolean;
    volume:                number;
    weight:                number;
    price:                 number;
    solicitingSetQuantity: number;
}

export interface Payment {
    id:             ID;
    createdTimeUtc: Date;
    updatedTimeUtc: Date;
    methodType:     string;
    method:         Complaint;
    originalAmount: number;
    amount:         number;
    status:         string;
    transactionId:  ID;
    isInitial:      boolean;
    errorMessage:   ID;
    logs:           Log[];
}

export interface Log {
    createdTimeUtc: Date;
    data:           ID;
    isError:        boolean;
}

export interface Rating {
    driver:  Created;
    rating:  string;
    message: ID;
}

export interface Shop {
    id:              ID;
    createdTime:     Date;
    updatedTime:     Date;
    isDeleted:       boolean;
    isArchived:      boolean;
    isEnabled:       boolean;
    name:            ID;
    description:     ID;
    customerName:    ID;
    customer:        Created;
    address:         Address;
    geoLocation:     GeoLocation;
    contactInfo:     ContactInfo;
    photoPath:       ID;
    zone:            Zone;
    neighbourhood:   Complaint;
    isFavourite:     boolean;
    status:          string;
    verified:        boolean;
    deliverable:     boolean;
    zoneDeliverable: boolean;
}
