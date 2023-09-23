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
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Teacher', 'Technical Support'],
  tenantName: 'Team',
  applicationName: 'Quran Correction',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user_progress',
    'Manage correction_history',
    'Manage reading_sessions',
    'Manage quran_verses',
    'Manage user',
    'Manage team',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5bf38926-cc0c-43d0-a046-11c18decd022',
};
