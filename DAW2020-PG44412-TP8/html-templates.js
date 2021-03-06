exports.fileList = fileList
exports.fileForm = fileForm

// File List HTML Page Template  -----------------------------------------
function fileList(files, d){
    let pagHTML = `
      <html>
          <head>
              <title>File List</title>
              <meta charset="utf-8"/>
              <link rel="icon" href="/favicon.png"/>
              <link rel="stylesheet" href="/w3.css"/>
              <script src="/jquery-3.5.1.min.js"></script>
              <script src="/imagens.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
          </head>
          <body>
              <div class="w3-card-4 modal" id="display"></div>

              <div class="w3-container w3-indigo">
                  <h2>File List</h2>
              </div>

              <div class="w3-center">
                  <a class="w3-button w3-indigo w3-round w3-margin" href="/files/upload">Upload Files</a>
              </div>
              <table class="w3-table w3-bordered w3-striped w3-border w3-hoverable">
                  <thead>
                        <tr class="w3-light-gray">
                            <th>Date</th>
                            <th>File</th>
                            <th>Description</th>
                            <th>Size</th>
                            <th>Type</th>
                        </tr>
                  </thead>
    `
    files.forEach( f => {
      pagHTML += `
            <tr onclick='showImage(\"${f.name}", \"${f.mimetype}\");'>
                <td>${f.date}</td>
                <td>${f.name}</td>
                <td>${f.desc}</td>
                <td>${f.size}</td>
                <td>${f.mimetype}</td>
            </tr>
      `
    })
  
    pagHTML += `
          </table>
          <div class="w3-container w3-indigo w3-padding">
              <address><center>Generated by TP8::DAW2020 in ${d}</center></address>
          </div>
      </body>
      </html>
    `
    return pagHTML
  }

// File Form HTML Page Template ------------------------------------------
function fileForm( d ){
    return `
    <html>
        <head>
            <title>File Upload</title>
            <meta charset="utf-8"/>
            <link rel="icon" href="/favicon.png"/>
            <script src="/form.js"></script>
            <script src="/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="/w3.css"/>
        </head>
        <body>
        
        </body>
            <div class="w3-container w3-indigo">
                <h2>File Upload</h2>
            </div>

            <button class="w3-button w3-black w3-round w3-margin w3-large" onclick='addForm()'>+</button>

            <form class="w3-container" action="/files" method="POST" enctype="multipart/form-data">
                <div class="w3-border-top w3-border-bottom">
                    <div class="w3-row w3-margin">
                        <div class="w3-col s3">
                            <label><b>Description:</b></label>
                        </div>
                        <div class="w3-col s9 w3-border">
                            <input style="height:40px" class="w3-input w3-border w3-light-grey" type="text" name="desc">
                        </div>
                    </div>
                    <div class="w3-row w3-margin">
                        <div class="w3-col s3">
                            <label><b>Select file:</b></label>
                        </div>
                        <div class="w3-col s9 w3-border">
                            <input class="w3-input w3-border w3-light-grey" type="file" name="myFiles">
                        </div>
                    </div>
                </div>

                <div id="newForm"></div>

                <input class="w3-button w3-black w3-block w3-round w3-margin-top" type="submit" value="Submit"/>
            </form>

            <div class="w3-center">
                <a class="w3-button w3-indigo w3-round w3-margin" href="/">Back</a>
            </div>

            <footer class="w3-container w3-indigo w3-padding">
                <address><center>Generated by TP8::DAW2020 in ${d}</center></address>
            </footer>
        </body>
    </html>
    `
}
