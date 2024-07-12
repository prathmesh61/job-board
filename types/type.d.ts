type TJobListing = {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  _creationTime: number;
  description: string;
  requirements: string;
  responsibilities: string;
  companyLogoUrl: string;
};
type TRecruiter = {
  _id: string;
  name: string;
  company: string;
  email: string;
  phone: number;
  _creationTime: number;
  companyLogoUrl: string;
};
type TCompanyList = {
  src: string;
  alt: string;
};
type TFaq = {
  question: string;
  answer: string;
};
type TCard = {
  title: string;
  content: string;
};
