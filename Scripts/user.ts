namespace core
{

    export class User
    {
        //Private instance members
        private m_displayName: string;
        private m_username: string;
        private m_emailAddress: string;
        private m_password: string;

        public get DisplayName(): string 
        {
            return this.m_displayName;
        }
        public set DisplayName(value: string) 
        {
            this.m_displayName = value;
        }

        public get EmailAddress(): string 
        {
            return this.m_emailAddress;
        }
        public set EmailAddress(value: string) 
        {
            this.m_emailAddress = value;
        }

        public get Username(): string 
        {
            return this.m_username;
        }
        public set Username(value: string) 
        {
            this.m_username = value;
        }

        public get Password(): string 
        {
            return this.m_password;
        }
        public set Password(value: string) 
        {
            this.m_password = value;
        }

        // constructor
        constructor(displayName: string = "", emailAddress: string = "", username: string ="", password: string = "")
        {
            this.m_displayName = displayName;
            this.m_emailAddress = emailAddress;
            this.m_username = username;
            this.m_password = password;
        }

        // overriden methods
        toString(): string
        {
            return `Display Name : ${this.DisplayName}\nEmail Address : ${this.EmailAddress}\nUsername : ${this.Username}`;
        }

        // utility methods
        toJSON() 
        {
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username
            }
        }

        fromJSON(data: any)
        {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }

        serialize(): string | null
        {
            if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
            {
                return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
            }
            console.error("One or more properties of the User Object are missing or invalid");
            return null;
        }
    
        deserialize(data:string) // assume that data is in a comma-separated format (string array of properties)
        {
            let propertyArray: string[] = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
        }
    }
}