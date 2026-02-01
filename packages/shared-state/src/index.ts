import { BehaviorSubject } from 'rxjs';

export const globalState$ = new BehaviorSubject<{ theme: 'light' | 'dark' }>({ theme: 'light' });

export const toggleTheme = () => {
  const current = globalState$.value;
  globalState$.next({ theme: current.theme === 'light' ? 'dark' : 'light' });
};
