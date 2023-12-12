import { Injectable } from "@angular/core";
import { GoogleAuth, User } from "@codetrix-studio/capacitor-google-auth";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GoogleAuthService {
  constructor() {}

  init() {
    GoogleAuth.initialize({
      clientId: environment.googleAuth.clientId,
      scopes: [
        "profile",
        "email",
        /*"https://www.googleapis.com/auth/user.gender.read",
          "https://www.googleapis.com/auth/user.birthday.read",*/
      ],
    });
  }

  async signIn(): Promise<User> {
    const googleUser = await GoogleAuth.signIn();
    // console.log(googleUser);
    return googleUser;
  }

  async checkGoogleLogin(): Promise<boolean> {
    return GoogleAuth.refresh()
      .then((data) => {
        if (data.accessToken) {
          // User is signed in
          return true;
        }
      })
      .catch((error) => {
        // console.log(error);
        if (error.type === "userLoggedOut") {
          return false;
        }
      });
  }

  async logout() {
    await GoogleAuth.signOut();
  }
}
