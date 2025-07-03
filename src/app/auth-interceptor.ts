   
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
   const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTAzNTNhNmIyZmU1NWI4ZTYzZWY5NTAwNmVkM2QxMyIsIm5iZiI6MTc0NjE4MzIyNS4xNjMsInN1YiI6IjY4MTRhNDM5MDliZTgzNjVmOGY0MDZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k84MufP7CvsFgQe4y66LwZzGJm386Y1AdVbkvqYOotY';
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};