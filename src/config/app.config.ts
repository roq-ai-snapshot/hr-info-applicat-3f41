interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Applicant'],
  tenantName: 'Company',
  applicationName: 'HR Info Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read employee information',
    'Update own user information',
    'Read applicant information',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage applicant data', 'Manage employee data'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/3363d137-1a03-4e8d-a51a-28bccb674bd0',
};
