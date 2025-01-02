

const Home = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Welcome to React Implementation....</h1>
            </header>

            <h2>Login Page --&gt;</h2>
            <p>Validates userid, pwd for expected</p>
            <p>Creates a JWT token and sets the token and authenticates the user</p>

            <h2>Navigation Page --&gt;</h2>
            <p>Only authenticated users can see the navigation bar</p>
            <p>Categorizes the drop down based on type of data</p>
            <p>Any cross reference on sites straight without authentication will be redirected to login page</p>
            <p>Has feature to search on the web site --&gt; not implemented</p>
            <p>Logout features reset the tokens</p>

            <h2>Currency --&gt;</h2>
            <p>Provides the option to pick data fields, search on a particular data fields</p>
            <p>Provides the option to add, edit, delete the data connecting to ASP.NET Core Web API 8.0 version using Entity Framework, However EF is not active because of database connectivity</p>
        </div>
    );
};

export default Home;


