const mapping: Record<string, string> = {
  'correction-histories': 'correction_history',
  'quran-verses': 'quran_verses',
  'reading-sessions': 'reading_sessions',
  teams: 'team',
  users: 'user',
  'user-progresses': 'user_progress',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
