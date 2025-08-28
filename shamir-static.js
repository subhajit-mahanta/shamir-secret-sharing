function splitSecret() {
  var secret = document.getElementById('secret').value;
  var numShares = parseInt(document.getElementById('numShares').value);
  var threshold = parseInt(document.getElementById('threshold').value);
  if (!secret) { alert('Please enter a secret.'); return; }
  if (threshold < 2 || numShares < threshold) { alert('Threshold must be at least 2 and less than or equal to number of shares.'); return; }
  var hexSecret = secrets.str2hex(secret);
  var shares = secrets.share(hexSecret, numShares, threshold);
  var partsList = document.getElementById('parts-list');
  partsList.innerHTML = '';
  shares.forEach(function(share, idx) {
    var wrapper = document.createElement('div');
    wrapper.className = 'input-group mb-2';
    var textarea = document.createElement('textarea');
    textarea.className = 'form-control';
    textarea.rows = 1;
    textarea.value = share;
    textarea.readOnly = true;
    textarea.onclick = function() { this.select(); };
    var btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.onclick = function() {
      textarea.select();
      document.execCommand('copy');
      btn.textContent = 'Copied!';
      setTimeout(function() { btn.textContent = 'Copy'; }, 1000);
    };
    wrapper.appendChild(textarea);
    wrapper.appendChild(btn);
    partsList.appendChild(wrapper);
  });
}

function combineParts() {
  var input = document.getElementById('combineInput').value.trim();
  var shares = input.split('\n').map(s => s.trim()).filter(Boolean);
  var resultBox = document.getElementById('combineResult');
  if (shares.length < 2) { resultBox.style.display = 'block'; resultBox.textContent = 'Enter at least 2 parts.'; return; }
  try {
    var hex = secrets.combine(shares);
    var secret = secrets.hex2str(hex);
    resultBox.style.display = 'block';
    resultBox.textContent = secret;
  } catch (e) {
    resultBox.style.display = 'block';
    resultBox.textContent = 'Invalid or insufficient parts.';
  }
}
