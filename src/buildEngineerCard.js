const buildEngineerCard = function (engineer) {
  return `<div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
            <div class="card">
                <div class="card-header">
                    ${engineer.name}<br/>
                    <i class="fas fa-code"></i> Engineer
                </div>
                <div class="card-body">
                    <p class="card-text"><strong>ID:</strong>>: ${engineer.id}</p>
                    <p class="card-text"><strong>Email:</strong> <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="card-text"><strong>Github:</strong> <a href="http://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
                </div>
            </div>
        </div>`;
};

module.exports = buildEngineerCard;
