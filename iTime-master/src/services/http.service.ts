import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {
        
    }

    executeGet(url : string, fnRetorno : (retorno : any) => void) {
        
        this.http.get(url).subscribe(fnRetorno, 
            (erro) => {
                alert('Erro ao executar ws. ' + erro.message)
            }
        )
    }


    executePost(url : string, dados : any, fnRetorno : (retorno : any) => void) {

        this.http.post(url, dados).subscribe(fnRetorno, 
            (erro) => {
                alert('Erro ao executar ws. ' + erro.message)
            }
        )
    }


}