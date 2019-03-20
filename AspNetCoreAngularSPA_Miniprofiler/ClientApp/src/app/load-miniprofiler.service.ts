import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoadMiniprofilerService {

  constructor(private http: HttpClient) { }

  /** Loads the script tag from the Razor page. We need to get the tag from Razor because Miniprofiler adds a bunch of IDs and other information to the
   * tag that changes on each page refresh.
   * */
  loadMiniprofiler() {
    return this.http.get("/Miniprofiler", { responseType: "text" })
      //The APP_INITIALIZER Factory only supports a promise. So we need to convert this observable to a promise.
      .toPromise()
      .then(miniProfiler => {
        //take the script response and compile it using the DOM template.
        const template = document.createElement("template");
        template.innerHTML = miniProfiler;
        let miniProfilerScript: HTMLScriptElement = (template.content.firstElementChild as HTMLScriptElement);

        // If we tried to take the tag from the template and put it on the page the browser won't load the script file.
        // So we need to build an actual script tag to add to the DOM so the browser will load the script file.
        let script = document.createElement("script");
        for (let i = 0, len = miniProfilerScript.attributes.length; i < len; i++) {
          const attribute = miniProfilerScript.attributes[i];
          script.setAttribute(attribute.name, attribute.value);
        }
        document.head.appendChild(script);
      });
  }
}
