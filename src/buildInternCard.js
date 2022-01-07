const buildInternCard = function (intern) {
  return `<div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
            <div class="card">
                <div class="card-header">
                    ${intern.name} <br/>
                    <i class="fas fa-user-graduate"></i> Intern
                </div>
                <div class="card-body">
                    <h5 class="card-title">Intern</h5>
                    <p class="card-text"><strong>ID:</strong> ${intern.id}</p>
                    <p class="card-text"><strong>Email:</strong> <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="card-text"><strong>School:</strong> ${intern.school}</p>
                </div>
              </div>
          </div>`;
};

module.exports = buildInternCard;
