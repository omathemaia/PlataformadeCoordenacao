import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Home } from "./pages/Home/Home.component";
import { Mensagens } from "./pages/Mensagens/Mensagens.component";
import { Login } from "./pages/Login/Login.component";
import { Equipe } from "./pages/Equipe/Equipe.component";
import { LoginSemRedeSocial } from "./pages/LoginSemRedeSocial/LoginSemRedeSocial.component";
import { CasamentoAlice } from "./pages/CasamentoAlice/CasamentoAlice.component";
import { Kanban } from "./pages/Kanban/Kanban.component";
const routes: Routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "",
    component: Mensagens,
  },
  {
    path: "login",
    component: Login,
  },
  {
    path: "equipe",
    component: Equipe,
  },
  {
    path: "login-sem-rede-social",
    component: LoginSemRedeSocial,
  },
  {
    path: "casamento-alice",
    component: CasamentoAlice,
  },
  {
    path: "kanban",
    component: Kanban,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
