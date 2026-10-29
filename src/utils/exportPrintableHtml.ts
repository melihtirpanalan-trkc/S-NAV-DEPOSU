import { ExamScenario, CustomExamConfig } from '../types/exam';
import { getOfficialOutcomeTitle } from '../data/learningOutcomes';

export function generatePrintableHtml(scenario: ExamScenario, config: CustomExamConfig): string {
  const dateStr = config.examDate || '04.11.2026';
  const school = config.schoolName || 'ÜLKÜ ORTAOKULU';
  const academic = config.academicYear || '2026-2027';
  const grade = scenario.gradeLevel || 5;
  const classGroup = config.classGroup || `${grade} / A`;

  const questionsHtml = scenario.questions
    .map((q) => {
      const subQuestionsHtml = q.subQuestions
        ? q.subQuestions
            .map(
              (sub) => `
          <div style="margin-top: 10px; padding-left: 8px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 13px;">${sub.label} (${sub.points} Puan)</div>
            <div style="font-size: 13px; color: #334155; margin-top: 4px; white-space: pre-line;">${sub.text}</div>
            ${
              config.showLines
                ? `<div style="margin-top: 8px; border-bottom: 1px dashed #cbd5e1; height: 26px;"></div>
                   <div style="margin-top: 4px; border-bottom: 1px dashed #cbd5e1; height: 26px;"></div>`
                : ''
            }
          </div>`
            )
            .join('')
        : '';

      const linesHtml =
        config.showLines && !q.subQuestions
          ? Array.from({ length: Math.min(q.linesNeeded, 8) })
              .map(() => `<div style="margin-top: 6px; border-bottom: 1px dashed #cbd5e1; height: 26px;"></div>`)
              .join('')
          : '';

      return `
        <div style="margin-bottom: 22px; page-break-inside: avoid; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; background: #ffffff;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; margin-bottom: 8px;">
            <div style="font-size: 13.5px; font-weight: 800; color: #0f172a;">
              Soru ${q.number}. <span style="font-weight: 700; color: #1e293b;">(${getOfficialOutcomeTitle(q.outcomeCode)})</span>
            </div>
            <div style="font-size: 13px; font-weight: 800; color: #b91c1c; white-space: nowrap;">
              [ ${q.points} PUAN ]
            </div>
          </div>
          <div style="font-size: 13.5px; line-height: 1.5; color: #1e293b; font-weight: 600; white-space: pre-line;">
            ${q.prompt}
          </div>
          ${subQuestionsHtml}
          ${linesHtml}
        </div>
      `;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>${school} - ${grade}. Sınıf Türkçe 1. Dönem 1. Yazılı - Türkçe Ülküsü Yayınları</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 14mm;
    }
    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      color: #0f172a;
      background: #ffffff;
      margin: 0;
      padding: 0;
      font-size: 13px;
      line-height: 1.45;
    }
    .header-box {
      border: 2px solid #0f172a;
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-title {
      font-family: Georgia, serif;
      font-weight: 900;
      font-size: 18px;
      color: #0f172a;
      line-height: 1.1;
    }
    .brand-sub {
      font-family: Georgia, serif;
      font-weight: 900;
      font-size: 12px;
      letter-spacing: 2px;
      color: #0f172a;
      margin-top: 3px;
    }
    .passage-box {
      background: #f8fafc;
      border: 1.5px solid #cbd5e1;
      border-radius: 8px;
      padding: 14px 18px;
      margin-bottom: 18px;
    }
    .passage-title {
      font-size: 15px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 10px;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .passage-text {
      font-size: 13px;
      line-height: 1.6;
      color: #1e293b;
      text-align: justify;
      white-space: pre-line;
    }
    .footer-note {
      text-align: center;
      font-size: 10.5px;
      color: #64748b;
      margin-top: 20px;
      border-top: 1px solid #e2e8f0;
      padding-top: 8px;
    }
  </style>
</head>
<body>
  <div class="header-box">
    <div style="display: flex; align-items: center; gap: 12px;">
      <div style="width: 50px; height: 50px; flex-shrink: 0;">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
          <defs>
            <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#b91c1c" />
              <stop offset="100%" stop-color="#7f1d1d" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#emblemGrad)" stroke="#f59e0b" stroke-width="3" />
          <circle cx="50" cy="50" r="44" fill="none" stroke="#fef3c7" stroke-width="1" stroke-dasharray="2,2" />
          <path d="M50 18 L52.5 25 L60 26 L54 31 L56 38 L50 34 L44 38 L46 31 L40 26 L47.5 25 Z" fill="#fbbf24" stroke="#d97706" stroke-width="0.5" />
          <path d="M50 72 V46 C44 42 30 42 22 46 V72 C30 68 44 68 50 72 Z" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" stroke-linejoin="round" />
          <path d="M50 72 V46 C56 42 70 42 78 46 V72 C70 68 56 68 50 72 Z" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" stroke-linejoin="round" />
          <path d="M50 46 V72" stroke="#94a3b8" stroke-width="2" />
          <path d="M28 54 H44" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round" />
          <path d="M28 60 H44" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round" />
          <path d="M56 54 H72" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round" />
          <path d="M56 60 H72" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round" />
          <path d="M20 84 Q50 92 80 84 Q50 88 20 84 Z" fill="#fbbf24" />
        </svg>
      </div>
      <div>
        <div class="brand-title">TÜRKÇE ÜLKÜSÜ</div>
        <div class="brand-sub">YAYINLARI</div>
        <div style="font-size: 11px; font-weight: 600; color: #475569; margin-top: 2px;">Türkiye Yüzyılı Maarif Modeli</div>
      </div>
    </div>
    <div style="text-align: center;">
      <div style="font-weight: 800; font-size: 15px; text-transform: uppercase;">${school}</div>
      <div style="font-weight: 700; font-size: 12px; color: #334155; margin-top: 2px;">
        ${academic} EĞİTİM ÖĞRETİM YILI ${grade}. SINIF TÜRKÇE DERSİ
      </div>
      <div style="font-weight: 800; font-size: 13px; color: #b91c1c; margin-top: 2px;">
        1. DÖNEM 1. YAZILI SINAVI (${scenario.scenarioGroupTitle} • ${scenario.scenarioName})
      </div>
    </div>
    <div style="border: 1px solid #94a3b8; border-radius: 6px; padding: 6px 10px; font-size: 11px; min-width: 150px;">
      <div><b>Adı Soyadı:</b> ................................</div>
      <div style="margin-top: 4px;"><b>Sınıf / Şube:</b> ${classGroup} &nbsp; <b>No:</b> ........</div>
      <div style="margin-top: 4px;"><b>Tarih:</b> ${dateStr}</div>
      <div style="margin-top: 4px; border-top: 1px solid #cbd5e1; padding-top: 3px; font-weight: 800; color: #b91c1c;">
        <b>ALDIĞI NOT:</b> .....................
      </div>
    </div>
  </div>

  <div class="passage-box">
    <div class="passage-title">${scenario.readingPassage.title}</div>
    <div class="passage-text">${scenario.readingPassage.content}</div>
    <div style="font-size: 10.5px; font-style: italic; color: #64748b; text-align: right; margin-top: 8px;">
      — ${scenario.readingPassage.author}
    </div>
  </div>

  <div style="font-weight: 800; font-size: 12px; color: #475569; margin-bottom: 12px; text-transform: uppercase;">
    Yönerge: Metne dayalı soruları yukarıdaki parçaya göre, diğer soruları ilgili yönergelere göre cevaplayınız. Sınav süresi ${scenario.durationMinutes} dakikadır. Başarılar dileriz.
  </div>

  <div class="questions-list">
    ${questionsHtml}
  </div>

  <div class="footer-note">
    TÜRKÇE ÜLKÜSÜ YAYINLARI • ${grade}. Sınıf ${scenario.scenarioGroupTitle} • Toplam: ${scenario.questions.length} Soru • ${scenario.totalPoints} Puan • Sınav Süresi: ${scenario.durationMinutes} Dakika
  </div>
</body>
</html>`;
}

export function downloadPrintableExam(scenario: ExamScenario, config: CustomExamConfig) {
  const html = generatePrintableHtml(scenario, config);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Turkce_Ulkusu_${scenario.gradeLevel || 5}_Sinif_${scenario.id}_Yazili_Sinavi.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function printExamDocument(scenario: ExamScenario, config: CustomExamConfig): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const html = generatePrintableHtml(scenario, config);

      // Clean up previous print iframe
      const oldFrame = document.getElementById('turkce-ulkusu-print-frame');
      if (oldFrame) {
        oldFrame.remove();
      }

      const iframe = document.createElement('iframe');
      iframe.id = 'turkce-ulkusu-print-frame';
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      iframe.style.visibility = 'hidden';

      document.body.appendChild(iframe);

      const frameDoc = iframe.contentWindow?.document || iframe.contentDocument;
      if (!frameDoc || !iframe.contentWindow) {
        try {
          window.print();
          resolve(true);
        } catch {
          resolve(false);
        }
        return;
      }

      frameDoc.open();
      frameDoc.write(html);
      frameDoc.close();

      let printed = false;
      const triggerPrint = () => {
        if (printed) return;
        printed = true;
        try {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
          resolve(true);
        } catch (err) {
          console.warn('Iframe print failed, fallback to window.print():', err);
          try {
            window.print();
            resolve(true);
          } catch (wErr) {
            console.error('All print methods blocked:', wErr);
            resolve(false);
          }
        }
      };

      iframe.onload = () => {
        setTimeout(triggerPrint, 250);
      };

      setTimeout(triggerPrint, 800);
    } catch (e) {
      console.warn('printExamDocument exception:', e);
      try {
        window.print();
        resolve(true);
      } catch {
        resolve(false);
      }
    }
  });
}

export async function downloadExamAsPdf(scenario: ExamScenario, config: CustomExamConfig): Promise<void> {
  const html2pdf = (await import('html2pdf.js')).default;
  const filename = `Turkce_Ulkusu_${scenario.gradeLevel || 5}_Sinif_${scenario.id}_Yazili_Sinavi.pdf`;

  // Prefer the rendered DOM element on page if present
  const domElement = document.getElementById('printable-exam-paper');
  let targetElement: HTMLElement;
  let tempCreated = false;

  if (domElement) {
    targetElement = domElement;
  } else {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = generatePrintableHtml(scenario, config);
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.style.width = '210mm';
    document.body.appendChild(tempDiv);
    targetElement = tempDiv;
    tempCreated = true;
  }

  const opt = {
    margin: [8, 8, 8, 8] as [number, number, number, number],
    filename,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  try {
    await html2pdf().set(opt).from(targetElement).save();
  } finally {
    if (tempCreated && targetElement.parentElement) {
      targetElement.remove();
    }
  }
}
