 document.addEventListener('DOMContentLoaded', () => {
      const translationPrices = {
        "en-ar": 0.1,
        "ar-en": 0.8,
        "en-fr": 0.7,
        "fr-en": 0.6,
        "fr-ar": 0.9,
        "ar-fr": 0.5
      };

      const calcBtn = document.getElementById('calcBtn');
      const fromEl = document.getElementById('fromLang');
      const toEl = document.getElementById('toLang');
      const wordsEl = document.getElementById('wordsCount');
      const couponEl = document.getElementById('couponCode');
      const output = document.getElementById('output');
      const discountSection = document.getElementById('discountSection');
      const errorBox = document.getElementById('error');

      // Defensive checks
      if (!calcBtn || !fromEl || !toEl || !wordsEl || !couponEl || !output || !discountSection) {
        console.error('One or more required elements are missing:', {calcBtn, fromEl, toEl, wordsEl, couponEl, output, discountSection});
        if (errorBox) { errorBox.style.display = 'block'; errorBox.textContent = 'Internal: required UI elements missing. Check IDs.'; }
        return;
      }

      calcBtn.addEventListener('click', () => {
        // Clear previous messages
        output.textContent = '';
        errorBox.style.display = 'none';
        discountSection.style.display = 'none';

        const from = fromEl.value;
        const to = toEl.value;
        const words = Number(wordsEl.value);
        const coupon = couponEl.value.trim();

        // Validation
        if (from === to) {
          output.textContent = 'Please choose two different languages.';
          return;
        }
        if (!words || words < 1 || !Number.isFinite(words)) {
          output.textContent = '';
          errorBox.style.display = 'block';
          errorBox.textContent = 'Enter a valid word count (1 or more).';
          return;
        }

        const key = `${from}-${to}`;
        const rate = translationPrices[key];

        if (rate === undefined) {
          errorBox.style.display = 'block';
          errorBox.textContent = `No rate defined for "${from} → ${to}".`;
          return;
        }

        let total = words * rate;

        if (coupon !== '') {
          const discountRate = 0.10; 
          total = total * (1 - discountRate);
          discountSection.style.display = 'block';
        }

        output.textContent = `Total: $${total.toFixed(2)}`;
      });
    });