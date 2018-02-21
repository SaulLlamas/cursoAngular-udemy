/**
 * Created by Saul on 20/02/2018.
 */

export class User{



  constructor(
    public  user_name : string,
    public  user_mail : string,
    public  user_password : string,
    public  user_sex? : string,
    public  user_img? : string,
    public  user_role? : string,
    public user_google_auth?: boolean

  ){

  }


}
