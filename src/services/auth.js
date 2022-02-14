export default function signIn(email, password) {

    return new Promise((resolve) => {

        setTimeout(() => {

            if (email === "admin@teste.com" && password === "admin") {

                resolve({

                    status: 200, // OK

                    data: {

                        token: "349023940823fjdsflksdfsd8s9dfd9s7f897498237sdifudaaddkasld1e",

                        user: {

                            userType: 999,
                            name: "Admin",
                            email: "admin@teste.com"
                        }
                    }
                })
            }

            else if (email === "carlos@teste.com" && password === "carlos") {

                resolve({

                    status: 200, // OK

                    data: {

                        token: "hsdkfj21324fdfdsbf340934485324ipospdfdskdsljgehrija",

                        user: {

                            userType: 1,
                            name: "Carlos",
                            email: "carlos@teste.com"
                        }
                    }
                })
            }

        }, 1500)
    })
}