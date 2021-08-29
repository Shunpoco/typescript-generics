interface SignupService<T> {
  signup(arg: T):void;
}

class MockSignupService implements SignupService<string> {
  /*
   * @override
   */
  signup(arg: string):void {
    console.log(`do signin ${arg}`);
  }
}

const signupService = new MockSignupService();

signupService.signup("hoge");


interface argTypes {
  name: string;
}

interface SigninService<T extends argTypes> {
  signin(arg: T):void;
}

interface Hoge extends argTypes {
  email: string;
  password: string;
}

class MockSigninServiceHoge implements SigninService<Hoge> {
  signin(arg: Hoge):void {
    console.log(arg.name);
    console.log(arg.email);
    console.log(arg.password);
  }
}

interface Fuga extends argTypes {
  provider: string;
}

class MockSigninServiceFuga implements SigninService<Fuga> {
  signin(arg: Fuga):void {
    console.log(arg.name);
    console.log(arg.provider);
  }
}

const hoge = {
  name: 'hoge',
  email: '111@gmail.com',
  password: '1111',
};

const fuga = {
  name: 'fuga',
  provider: 'google',
};

const signinHoge = new MockSigninServiceHoge();
const signinFuga = new MockSigninServiceFuga();

signinHoge.signin(hoge);
signinFuga.signin(fuga);

interface LogoutService {
  logout<T>(arg: T): void;
}

class MockLogoutService implements LogoutService {
  logout<T>(arg: T): void {
    console.log(arg);
    console.log(typeof(arg));
  } 
}

const logoutService = new MockLogoutService();

logoutService.logout('hoge');
