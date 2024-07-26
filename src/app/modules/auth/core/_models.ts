/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthModel {
  token:string
  api_token: string
  refreshToken?: string
}

export interface UserAddressModel {
  addressLine: string
  city: string
  state: string
  postCode: string
}

export interface UserCommunicationModel {
  email: boolean
  sms: boolean
  phone: boolean
}

export interface UserEmailSettingsModel {
  emailNotification?: boolean
  sendCopyToPersonalEmail?: boolean
  activityRelatesEmail?: {
    youHaveNewNotifications?: boolean
    youAreSentADirectMessage?: boolean
    someoneAddsYouAsAsAConnection?: boolean
    uponNewOrder?: boolean
    newMembershipApproval?: boolean
    memberRegistration?: boolean
  }
  updatesFromKeenthemes?: {
    newsAboutKeenthemesProductsAndFeatureUpdates?: boolean
    tipsOnGettingMoreOutOfKeen?: boolean
    thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean
    newsAboutStartOnPartnerProductsAndOtherServices?: boolean
    tipsOnStartBusinessProducts?: boolean
  }
}

export interface UserSocialNetworksModel {
  linkedIn: string
  facebook: string
  twitter: string
  instagram: string
}

export interface UserModel {
  id: number
  username?: string
  password: string | undefined
  email: string
  first_name: string
  avatarColor: string
  authId: string
  last_name: string
  fullname?: string
  profilePicture?: string
  occupation?: string 
  companyName?: string
  phone?: string
  roles?: Array<number>
  pic?: string
  language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
  timeZone?: string
  website?: 'https://keenthemes.com'
  emailSettings?: UserEmailSettingsModel
  auth?: AuthModel
  communication?: UserCommunicationModel
  address?: UserAddressModel
  socialNetworks?: UserSocialNetworksModel
  token?:string
}

interface IInformacionGeneral {
  empleoActual: string;
  estudioActual: string;
  ciudad: string;
  lugarOrigen: string;
  situacionSentimental?: string;
  telefono?: string;
}

interface IEmpleo {
  id: string;
  titulo: string;
  empresa?: string;
  activo?: boolean;
}

interface IEmpleoFormacion {
  id: string;
  titulo: string;
  lugar: string;
  desde: Date;
  hasta?: Date;
}

interface IResidencia {
  ciudad: string;
  pais: string;
}

interface IContactoBasico {
  telefono: string;
  email: string;
}

interface IRelacion {
  tipo: string;
  nombre: string;
}

interface IAcontecimiento {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: Date;
}

interface IEducacion {
  id: string;
  titulo: string;
  universidad?: string;
  activo: boolean;
}

interface IInfoUsuario {
  intereses: string[];
  pasatiempos: string[];
}

interface IDetalles {
  presentacion?: string;
  educacion: IEducacion[];
  destacados?: string[];
  activo?: boolean;
}

interface IPerfil {
  informacionGeneral: IInformacionGeneral;
  empleoFormacion?: IEmpleoFormacion[];
  empleo: IEmpleo[];
  educacion: IEducacion[];
  infoUsuario: IInfoUsuario;
  presentacion?: IDetalles;
  residencias?: IResidencia[];
  contactoBasico?: IContactoBasico;
  relaciones?: IRelacion[];
  acontecimientosImportantes?: IAcontecimiento[];
}

interface INotificationSettings {
  messages: boolean;
  reactions: boolean;
  comments: boolean;
  follows: boolean;
  friendRequests: boolean;
}

interface ISocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
}

export interface IUserDocument {
  _id: string;
  authId: string;
  username?: string;
  email?: string;
  password?: string;
  avatarColor?: string;
  uId?: string;
  postsCount: number;
  work: string;
  school: string;
  quote: string;
  infoGeneral: IInformacionGeneral;
  empleo: IEmpleoFormacion;
  residendencia: IResidencia;
  contact: IContactoBasico;
  relacion: IRelacion;
  perfil: IPerfil;
  acontecimientos: IAcontecimiento;
  location: string;
  blocked: string[];
  blockedBy: string[];
  followersCount: number;
  followingCount: number;
  notifications: INotificationSettings;
  social: ISocialLinks;
  bgImageVersion: string;
  bgImageId: string;
  profilePicture: string;
  privacy?: string;
  privacySettings?: { 
    friendsList?: string;
    photos?: string;
    posts?: string;
  };
  lastActive?: Date;
  featuredFriends?: string[];
  savedPosts?: string[];
  preferences?: {
    notificationSound?: boolean;
    darkMode?: boolean;
    language?: string;
  };
  searchHistory?: {
    term: string;
    date: Date;
  }[];
  friendRequests?: {
    sender: string;
    status: 'pending' | 'accepted' | 'rejected';
    date: Date;
  }[];
  friends?: string[];
  createdAt?: Date;
}

export interface ICurrentUser {
  isUser: boolean
  token: string
  user: IUserDocument
}

