import equiposRoutes from './equipos/adapters/http';
import jugadoresRoutes from './jugadores/adapters/http';

// import userSockets from './user/adapters/socket';
// import authRoutes from './auth/adapters/http';

export const Routes = (app) => {
  equiposRoutes(app, '/equipo');
  jugadoresRoutes(app, '/jugador');

  //  authRoutes(app);

}

export const Sockets = (io, socket) => {
  // userSockets(io, socket);
}
