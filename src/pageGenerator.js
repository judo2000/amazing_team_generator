const managerCard = manager => {
  return `<div col-md-4 col-sm-12 mt-4>
    <div class="card">
            <div class="card-header">
                ${manager.name}
            </div>
            <div class="card-body">
                <h5 class="card-title">${manager.role}</h5>
                <p class="card-text">ID: ${manager.id}</p>
                <p class="card-text">ID: ${manager.email}</p>
                <p class="card-text">ID: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
};

const engineerCard = engineer => {
  return `<div col-md-4 col-sm-12 mt-4>
      <div class="card">
              <div class="card-header">
                  ${engineer.name}
              </div>
              <div class="card-body">
                  <h5 class="card-title">${engineer.role}</h5>
                  <p class="card-text">ID: ${engineer.id}</p>
                  <p class="card-text">ID: ${engineer.email}</p>
                  <p class="card-text">ID: ${engineer.github}</p>
              </div>
          </div>
      </div>`;
};

const internCard = intern => {
  return `<div col-md-4 col-sm-12 mt-4>
        <div class="card">
                <div class="card-header">
                    ${intern.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${intern.role}</h5>
                    <p class="card-text">ID: ${intern.id}</p>
                    <p class="card-text">ID: ${intern.email}</p>
                    <p class="card-text">ID: ${intern.school}</p>
                </div>
            </div>
        </div>`;
};

const page = response => {
  return `<!doctype html>
    <html lang="en">
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" rel="stylesheet">
            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="assets/css/style.css">
            <title>Team Profile</title>
        </head>
        <body>
            <header class="header">
                <div class="row">
                    <div class="col-lg-10 header_text text-center">
                        <h1>Our Team</h1>
                    </div>
                </div> 
            </header>
        
            <main>
                <div class="container-fluid">
                    <div class="row text-center">
                        // team info here
                    </div>
                </div>
            </main>
                
            <footer class="footer pt-3">
                Amazing Team Profile Generator
                <br />
                @ 2021. All Rights Reserved
            </footer>
            
        
            // Bootstrap
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </body>
    </html>`;
};

module.exports = page;
