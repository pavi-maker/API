async function asyncFn(){
    const posts = await fetch('https://api.genderize.io/?name[]=peter&name[]=lois&name[]=stevie')     
    const parsedData = await posts.json();
    console.log(parsedData)
    }
    
    const data = {
       "country":
           [
               
               {
                   "country_id": "DE",
                   "probability": 0.059
               },
              
               {
                   "country_id": "IE",
                   "probability": 0.051
               },
            
           ],
       "name": "michael"
    }
    
    const output = data.country.slice(0, 2);
    
    console.log('Top 2 Values: ', output)
    
    const finalResult = {countries: output, name: data.name}
    
    console.log('final Result: ', finalResult)
    
    
    let params = {
       "param1": "value1",
       "param2": "value2"
     };
     
     let query = Object.keys(params)
                  .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&');
     
     let url = 'https://api.genderize.io/?name[]=peter&name[]=lois&name[]=stevie' + query;
     
     fetch('https://api.genderize.io/?name[]=peter&name[]=lois&name[]=stevie')
       .then(data => data.text())
       .then((text) => {
         console.log('request succeeded with JSON response', text)
       }).catch(function (error) {
         console.log('request failed', error)
       });
    
    
       