import { ExamScenario, CustomExamConfig } from '../types/exam';
import { getOfficialOutcomeTitle } from '../data/learningOutcomes';
import { TURKCE_ULKUSU_LOGO_DATA_URI } from '../assets/logoDataUri';

export function generatePrintablebodyInner(
  scenario: ExamScenario,
  config: CustomExamConfig,
  isAnswerKey = false
): string {
  const dateStr = config.examDate || '04.11.2026';
  const school = config.schoolName || 'ÜLKÜ ORTAOKULU';
  const academic = config.academicYear || '2026-2027';
  const grade = scenario.gradeLevel || 5;
  const classGroup = config.classGroup || `${grade} / A`;
  const teacher = config.teacherName || '.....................';
  const duration = scenario.durationMinutes || 40;
  const totalPoints = scenario.totalPoints || 100;

  const passageFontSize =
    config.fontSize === 'sm' ? '12px' : config.fontSize === 'lg' ? '15px' : '13.5px';

  const headerBottomHtml = !isAnswerKey
    ? `
      <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 10px; font-size: 11.5px;">
        <tr>
          <td style="width: 66%; vertical-align: top; padding-right: 8px;">
            <div style="background-color: #f8fafc; padding: 8px 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 11.5px;">
                <tr>
                  <td style="width: 50%; padding: 3px 6px 3px 0; vertical-align: bottom;">
                    <span style="font-weight: 700; color: #334155;">Adı Soyadı: </span>
                    <span style="color: #64748b;">............................</span>
                  </td>
                  <td style="width: 50%; padding: 3px 0 3px 6px; vertical-align: bottom;">
                    <span style="font-weight: 700; color: #334155;">Sınıfı / Şubesi: </span>
                    <span style="font-weight: 700; color: #0f172a;">${classGroup}</span>
                  </td>
                </tr>
                <tr>
                  <td style="width: 50%; padding: 6px 6px 3px 0; vertical-align: bottom;">
                    <span style="font-weight: 700; color: #334155;">Okul Numarası: </span>
                    <span style="color: #64748b;">.......................</span>
                  </td>
                  <td style="width: 50%; padding: 6px 0 3px 6px; vertical-align: bottom;">
                    <span style="font-weight: 700; color: #334155;">Sınav Tarihi: </span>
                    <span style="font-weight: 700; color: #0f172a;">${dateStr}</span>
                  </td>
                </tr>
              </table>
            </div>
          </td>
          <td style="width: 34%; vertical-align: top;">
            <div style="background-color: #fef2f2; border: 2px solid #dc2626; border-radius: 6px; padding: 6px 8px; text-align: center;">
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 10px; font-weight: 800; color: #7f1d1d; border-bottom: 1px solid #fecaca; padding-bottom: 2px;">
                <span>ALDIĞI NOT</span>
                <span style="font-size: 9px; color: #64748b; font-weight: 500;">Süre: ${duration} Dk.</span>
              </div>
              <div style="margin: 4px 0; text-align: center;">
                <span style="font-size: 18px; font-weight: 900; color: #991b1b;">.....</span>
                <span style="font-size: 12px; font-weight: 700; color: #64748b; margin-left: 3px;">/ ${totalPoints}</span>
              </div>
              <div style="font-size: 9px; color: #475569; border-top: 1px solid #fecaca; padding-top: 2px; display: flex; justify-content: space-between;">
                <span>Öğrt: ${teacher}</span>
                <span>İmza: .......</span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    `
    : `
      <div style="margin-top: 10px; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; padding: 8px 10px; font-size: 11.5px; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <strong style="color: #064e3b;">📌 Değerlendirme Kriteri:</strong>
          <span style="color: #065f46; margin-left: 6px;">
            MEB Ölçme ve Değerlendirme Yönetmeliği uyarınca her soru açık uçlu olup tam ve kısmi puan rubriğiyle derecelendirilmiştir.
          </span>
        </div>
        <div style="font-weight: 800; color: #022c22; white-space: nowrap; margin-left: 12px;">
          Toplam: ${scenario.questions.length} Soru • ${totalPoints} Puan
        </div>
      </div>
    `;

  const bodyContentHtml = !isAnswerKey
    ? `
      <!-- Reading Passage Box -->
      <div class="avoid-break" style="border: 2px solid #cbd5e1; background-color: #f8fafc; border-radius: 8px; padding: 14px 16px; margin-bottom: 16px; page-break-inside: avoid; break-inside: avoid;">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 15px; font-weight: 900; color: #0f172a;">${scenario.readingPassage.title}</span>
          </div>
          <span style="font-size: 11px; font-weight: 600; color: #64748b; font-style: italic;">${scenario.readingPassage.author}</span>
        </div>
        <div style="font-family: Georgia, 'Times New Roman', serif; font-size: ${passageFontSize}; color: #1e293b; text-align: justify; white-space: pre-line; line-height: 1.55;">${scenario.readingPassage.content}</div>
        <div style="margin-top: 10px; padding-top: 6px; border-top: 1px solid #e2e8f0; text-align: right; font-size: 11px; font-weight: 700; color: #991b1b;">
          (1, 2, 3, 4 ve 5. soruları yukarıdaki metne göre cevaplayınız.)
        </div>
      </div>

      <!-- Questions List -->
      <div>
        ${scenario.questions
          .map((q) => {
            const subQuestionsHtml =
              q.subQuestions && q.subQuestions.length > 0
                ? `<div style="padding-left: 10px; border-left: 2px solid #fecaca; margin-bottom: 8px;">
                    ${q.subQuestions
                      .map(
                        (sub) => `
                        <div style="margin-bottom: 8px;">
                          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
                            <span style="font-size: 12.5px; font-weight: 700; color: #1e293b;">${sub.label}:</span>
                            <span style="font-size: 11px; font-weight: 700; color: #64748b; background-color: #f1f5f9; padding: 1px 6px; border-radius: 4px;">${sub.points} Puan</span>
                          </div>
                          <div style="font-size: 12.5px; color: #334155; font-style: italic; margin-bottom: 4px;">${sub.text}</div>
                          ${
                            config.showLines
                              ? `<div style="border-bottom: 1px dashed #cbd5e1; height: 20px; margin-top: 4px;"></div>
                                 <div style="border-bottom: 1px dashed #cbd5e1; height: 20px; margin-top: 4px;"></div>`
                              : ''
                          }
                        </div>
                      `
                      )
                      .join('')}
                  </div>`
                : '';

            const linesHtml =
              config.showLines && (!q.subQuestions || q.subQuestions.length === 0)
                ? `<div style="margin-top: 8px; background-color: #f8fafc; padding: 8px 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
                    <div style="font-size: 10px; font-weight: 700; color: #94a3b8; margin-bottom: 4px; display: flex; justify-content: space-between;">
                      <span>CEVAP ALANI:</span>
                      <span>(Açık Uçlu Yanıtınızı Buraya Yazınız)</span>
                    </div>
                    ${Array.from({ length: q.linesNeeded })
                      .map(
                        () =>
                          `<div style="border-bottom: 1px solid #cbd5e1; height: 22px; margin-top: 4px;"></div>`
                      )
                      .join('')}
                  </div>`
                : '';

            return `
              <div class="avoid-break" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; background-color: #ffffff; margin-bottom: 14px; page-break-inside: avoid; break-inside: avoid;">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; margin-bottom: 8px;">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="width: 26px; height: 26px; border-radius: 9999px; background-color: #b91c1c; color: #ffffff; font-weight: 900; font-size: 13px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">${q.number}</span>
                    <span style="font-size: 12.5px; font-weight: 700; color: #1e293b;">${getOfficialOutcomeTitle(q.outcomeCode)}</span>
                  </div>
                  <span style="padding: 2px 10px; border-radius: 9999px; font-size: 11.5px; font-weight: 900; background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; white-space: nowrap; flex-shrink: 0;">${q.points} Puan</span>
                </div>
                <div style="font-size: 13.5px; font-weight: 600; color: #0f172a; margin-bottom: 10px; line-height: 1.45; white-space: pre-line;">${q.prompt}</div>
                ${subQuestionsHtml}
                ${linesHtml}
              </div>
            `;
          })
          .join('')}
      </div>
    `
    : `
      <div class="avoid-break" style="margin-bottom: 14px; background-color: #ecfdf5; border: 1px solid #6ee7b7; border-radius: 8px; padding: 12px 14px; page-break-inside: avoid; break-inside: avoid;">
        <div style="font-weight: 900; font-size: 13px; color: #022c22; text-transform: uppercase; margin-bottom: 4px;">
          Türkiye Yüzyılı Maarif Modeli Dereceli Puanlama Yönergesi
        </div>
        <div style="font-size: 11.5px; color: #065f46; line-height: 1.5;">
          Bu sınav, MEB Ölçme ve Değerlendirme Yönetmeliği esaslarına göre öğrencilerin ezber bilgilerini değil; metinden anlam kurma, bağlamdan tahmin yürütme, derin çıkarım yapma, söz varlığını zenginleştirme ve yazım/noktalama kurallarını metin içinde uygulayabilme becerilerini ölçmek için tasarlanmıştır.
        </div>
      </div>

      <div>
        ${scenario.questions
          .map((q) => {
            const subSolutionsHtml =
              q.subQuestions && q.subQuestions.length > 0
                ? q.subQuestions
                    .map(
                      (sub) => `
                      <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 10px; margin-bottom: 8px;">
                        <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 11.5px; color: #022c22; margin-bottom: 4px;">
                          <span>${sub.label}</span>
                          <span>${sub.points} Puan</span>
                        </div>
                        <div style="font-size: 11.5px; color: #334155; font-style: italic; margin-bottom: 6px;">${sub.text}</div>
                        <div style="font-size: 12.5px; color: #022c22; font-weight: 500; white-space: pre-line; background-color: #ffffff; padding: 8px 10px; border-radius: 6px; border: 1px solid #a7f3d0; line-height: 1.5;">${sub.expectedAnswer}</div>
                      </div>
                    `
                    )
                    .join('')
                : `
                  <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 10px;">
                    <div style="font-weight: 800; font-size: 11.5px; color: #064e3b; margin-bottom: 6px;">
                      ✓ Örnek / Model Tam Puanlık Yanıt:
                    </div>
                    <div style="font-size: 12.5px; color: #022c22; font-weight: 500; white-space: pre-line; background-color: #ffffff; padding: 8px 10px; border-radius: 6px; border: 1px solid #a7f3d0; line-height: 1.5;">${q.expectedAnswer}</div>
                  </div>
                `;

            const rubricRowsHtml = q.rubric
              .map(
                (r) => `
                <tr>
                  <td style="padding: 6px 8px; border-top: 1px solid #e2e8f0; color: #1e293b;">${r.criterion}</td>
                  <td style="padding: 6px 8px; border-top: 1px solid #e2e8f0; text-align: right; font-weight: 900; color: #065f46; white-space: nowrap;">${r.points} Puan</td>
                </tr>
              `
              )
              .join('');

            return `
              <div class="avoid-break" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; background-color: #ffffff; margin-bottom: 14px; page-break-inside: avoid; break-inside: avoid;">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; margin-bottom: 8px;">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="width: 26px; height: 26px; border-radius: 9999px; background-color: #047857; color: #ffffff; font-weight: 900; font-size: 13px; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">${q.number}</span>
                    <span style="font-size: 12.5px; font-weight: 700; color: #1e293b;">${getOfficialOutcomeTitle(q.outcomeCode)}</span>
                  </div>
                  <span style="padding: 2px 10px; border-radius: 9999px; font-size: 11.5px; font-weight: 900; background-color: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; white-space: nowrap; flex-shrink: 0;">${q.points} Puan</span>
                </div>
                <div style="font-size: 12px; font-weight: 600; color: #334155; background-color: #f8fafc; padding: 8px 10px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 10px; white-space: pre-line;">
                  <strong style="color: #0f172a; display: block; margin-bottom: 2px;">Soru Metni:</strong>${q.prompt}
                </div>
                ${subSolutionsHtml}
                <div style="margin-top: 10px;">
                  <div style="font-size: 10.5px; font-weight: 800; color: #334155; text-transform: uppercase; margin-bottom: 4px;">
                    Dereceli Puanlama Anahtarı (Rubrik)
                  </div>
                  <table style="width: 100%; border-collapse: collapse; font-size: 11.5px; border: 1px solid #e2e8f0;">
                    <thead>
                      <tr style="background-color: #f1f5f9; color: #1e293b; font-weight: 800;">
                        <th style="padding: 6px 8px; text-align: left;">Ölçüt / Değerlendirme Basamağı</th>
                        <th style="padding: 6px 8px; text-align: right; width: 90px;">Puan Değeri</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rubricRowsHtml}
                    </tbody>
                  </table>
                </div>
              </div>
            `;
          })
          .join('')}
      </div>
    `;

  return `
    <div id="pdf-root" style="width: 100%; background-color: #ffffff; color: #0f172a; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size: 13px; line-height: 1.45; box-sizing: border-box;">
      <!-- Official Exam Header (Logo ONLY on page 1 top-left corner) -->
      <div class="avoid-break" style="border: 2px solid #1e293b; border-radius: 8px; padding: 12px 14px; background-color: #ffffff; margin-bottom: 16px; page-break-inside: avoid; break-inside: avoid;">
        <table style="width: 100%; border-collapse: collapse; border-bottom: 1px solid #cbd5e1; padding-bottom: 10px;">
          <tr>
            <!-- Left: Logo & Brand -->
            <td style="width: 26%; vertical-align: middle; padding-bottom: 10px;">
              <table style="border-collapse: collapse;">
                <tr>
                  <td style="vertical-align: middle; padding-right: 8px;">
                    <img
                      src="${TURKCE_ULKUSU_LOGO_DATA_URI}"
                      alt="Türkçe Ülküsü Logo"
                      width="52"
                      height="52"
                      style="width: 52px !important; height: 52px !important; max-width: 52px !important; max-height: 52px !important; object-fit: contain; display: block;"
                    />
                  </td>
                  <td style="vertical-align: middle;">
                    <div style="font-family: Georgia, 'Times New Roman', serif; font-weight: 900; font-size: 12.5px; color: #0f172a; line-height: 1.05;">
                      TÜRKÇE ÜLKÜSÜ
                    </div>
                    <div style="font-family: Georgia, 'Times New Roman', serif; font-weight: 900; font-size: 9.5px; letter-spacing: 1.5px; color: #0f172a; margin-top: 2px; line-height: 1;">
                      YAYINLARI
                    </div>
                    <div style="font-size: 8.5px; font-weight: 600; color: #64748b; margin-top: 2px;">
                      Ölçme & Değerlendirme
                    </div>
                  </td>
                </tr>
              </table>
            </td>

            <!-- Center: School & Exam Title -->
            <td style="width: 52%; vertical-align: middle; text-align: center; padding: 0 4px 10px 4px;">
              <div style="font-size: 13px; font-weight: 900; text-transform: uppercase; color: #1e293b; margin: 0 0 3px 0; letter-spacing: 0.3px;">
                ${school}
              </div>
              <div style="font-size: 14px; font-weight: 900; color: #b91c1c; margin: 0 0 6px 0;">
                ${academic} EĞİTİM ÖĞRETİM YILI ${grade}. SINIF TÜRKÇE DERSİ
              </div>
              <div style="font-size: 11px; font-weight: 800; color: #0f172a;">
                <span>1. DÖNEM 1. YAZILI SINAVI</span>
                <span style="color: #94a3b8; margin: 0 4px;">•</span>
                <span style="background-color: #eff6ff; color: #1e3a8a; border: 1px solid #bfdbfe; padding: 2px 6px; border-radius: 4px; font-weight: 800; display: inline-block;">
                  ${scenario.scenarioGroupTitle} • ${scenario.scenarioName}
                </span>
                ${
                  isAnswerKey
                    ? `<div style="margin-top: 4px;"><span style="background-color: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; padding: 2px 6px; border-radius: 4px; font-weight: 800; display: inline-block;">CEVAP ANAHTARI & PUANLAMA RUBRİĞİ</span></div>`
                    : ''
                }
              </div>
            </td>

            <!-- Right: Format Card -->
            <td style="width: 22%; vertical-align: middle; text-align: right; padding-bottom: 10px;">
              <div style="display: inline-block; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 6px 10px; text-align: right; line-height: 1.25;">
                <span style="display: block; font-size: 9px; font-weight: 700; text-transform: uppercase; color: #64748b;">
                  Sınav Formatı
                </span>
                <span style="display: block; font-size: 11px; font-weight: 900; color: #0f172a; margin-top: 2px;">
                  Açık Uçlu Yazılı
                </span>
                <span style="display: block; font-size: 9.5px; font-weight: 800; color: #b91c1c; margin-top: 2px;">
                  ${totalPoints} Puan • ${duration} Dk.
                </span>
              </div>
            </td>
          </tr>
        </table>

        ${headerBottomHtml}
      </div>

      ${bodyContentHtml}

      <!-- Exam Paper Footer (Logosuz, sade metin) -->
      <div class="avoid-break" style="margin-top: 20px; padding-top: 10px; border-top: 2px solid #1e293b; display: flex; align-items: center; justify-content: space-between; font-size: 11.5px; color: #475569; page-break-inside: avoid; break-inside: avoid;">
        <div>
          <strong style="color: #1e293b;">Türkçe Ülküsü Yayınları</strong>
          <span>• ${scenario.targetClass || `${grade}. Sınıf`} Yazılıya Hazırlık Serisi</span>
        </div>
        <div>
          <strong style="color: #1e293b;">Başarılar Dileriz!</strong>
        </div>
      </div>
    </div>
  `;
}

export function generatePrintableHtml(
  scenario: ExamScenario,
  config: CustomExamConfig,
  isAnswerKey = false
): string {
  const school = config.schoolName || 'ÜLKÜ ORTAOKULU';
  const grade = scenario.gradeLevel || 5;
  const bodyInner = generatePrintablebodyInner(scenario, config, isAnswerKey);

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>${school} - ${grade}. Sınıf Türkçe 1. Dönem 1. Yazılı - Türkçe Ülküsü Yayınları</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 12mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #0f172a;
    }
    .avoid-break {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }
  </style>
</head>
<body>
  ${bodyInner}
</body>
</html>`;
}

export function downloadPrintableExam(
  scenario: ExamScenario,
  config: CustomExamConfig,
  isAnswerKey = false
) {
  const html = generatePrintableHtml(scenario, config, isAnswerKey);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Turkce_Ulkusu_${scenario.gradeLevel || 5}_Sinif_${scenario.id}_${
    isAnswerKey ? 'Cevap_Anahtari' : 'Yazili_Sinavi'
  }.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function printExamDocument(
  scenario: ExamScenario,
  config: CustomExamConfig,
  isAnswerKey = false
): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const html = generatePrintableHtml(scenario, config, isAnswerKey);

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
        setTimeout(triggerPrint, 200);
      };

      setTimeout(triggerPrint, 600);
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

export async function downloadExamAsPdf(
  scenario: ExamScenario,
  config: CustomExamConfig,
  isAnswerKey = false
): Promise<void> {
  const html2pdf = (await import('html2pdf.js')).default;
  const filename = `Turkce_Ulkusu_${scenario.gradeLevel || 5}_Sinif_${scenario.id}_${
    isAnswerKey ? 'Cevap_Anahtari' : 'Yazili_Sinavi'
  }.pdf`;

  // Create an inline-styled container so html2pdf's cloneNode(true) preserves 100% of styles
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = generatePrintablebodyInner(scenario, config, isAnswerKey);
  tempDiv.style.width = '740px';
  tempDiv.style.backgroundColor = '#ffffff';
  tempDiv.style.color = '#0f172a';
  tempDiv.style.padding = '0';
  tempDiv.style.margin = '0';

  const opt = {
    margin: [10, 10, 10, 10] as [number, number, number, number],
    filename,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
    pagebreak: { mode: ['css', 'legacy'], avoid: ['.avoid-break'] },
  };

  await html2pdf().set(opt).from(tempDiv).save();
}
