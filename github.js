class Github{
    constructor(){
        this.client_id = '571a8cccbf50fe2f5d6c';
        this.client_secret = '7b858568222eaee19531ecc490b4e6e3f2bda7a5';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();

        return{
            profile
        }
    }
}