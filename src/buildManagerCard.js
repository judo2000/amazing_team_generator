const buildManagerCard = function (manager) {
  return `<div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
            <div class="card">
                <div class="card-header">
                    ${manager.name} <br/>
                    <i class="fas fa-mug-hot"></i> Manager
                </div>
                <div class="card-body">
                    <p class="card-text"><strong>ID:</strong> ${manager.id}</p>
                    <p class="card-text"><strong>Email:</strong> <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="card-text"><strong>Office:</strong> ${manager.officeNumber}</p>
                </div>
            </div>
        </div>`;
};

module.exports = buildManagerCard;
