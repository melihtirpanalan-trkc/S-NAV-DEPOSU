import { ExamScenario, CustomExamConfig } from '../types/exam';
import { getOfficialOutcomeTitle } from '../data/learningOutcomes';
import { TURKCE_ULKUSU_LOGO_DATA_URI } from '../assets/logoDataUri';

export function generatePrintablebodyInner(
  scenario: ExamScenario,
  config: CustomExamConfig,
  isAnswerKey = false,
  forPdfExport = false
): string {
  const dateStr = config.examDate || '04.11.2026';
  const school = config.schoolName || 'ÜLKÜ ORTAOKULU';
  const academic = config.academicYear || '2026-2027';
  const grade = scenario.gradeLevel || 5;
  const classGroup = config.classGroup || `${grade} / A`;
  const teacher = config.teacherName || '.....................';
  const duration = scenario.durationMinutes || 40;
  const totalPoints = scenario.totalPoints || 100;

  const totalQuestions = scenario.questions.length;
  // Distribute questions across 2 A4 pages so Page 1 (Header + Passage + Page 1 Questions)
  // and Page 2 (Page 2 Questions + Footer) have balanced visual density and zero bottom blank space:
  const page1QuestionCount = totalQuestions <= 6 ? 2 : totalQuestions <= 8 ? 3 : 4;
  const page2QuestionCount = Math.max(1, totalQuestions - page1QuestionCount);

  // Larger, clear A4 print font sizes (puntos) tailored to question count so 2 A4 pages are filled completely
  const isDenseExam = totalQuestions >= 9;
  const isMediumDenseExam = totalQuestions === 8;

  const passageFontSize = isDenseExam
    ? config.fontSize === 'sm'
      ? '11.6px'
      : config.fontSize === 'lg'
      ? '12.6px'
      : '12.1px'
    : isMediumDenseExam
    ? config.fontSize === 'sm'
      ? '12.2px'
      : config.fontSize === 'lg'
      ? '13.4px'
      : '12.8px'
    : config.fontSize === 'sm'
    ? '12.8px'
    : config.fontSize === 'lg'
    ? '14.2px'
    : '13.5px';

  const promptFontSize = isDenseExam
    ? config.fontSize === 'sm'
      ? '11.8px'
      : config.fontSize === 'lg'
      ? '12.8px'
      : '12.3px'
    : isMediumDenseExam
    ? config.fontSize === 'sm'
      ? '12.4px'
      : config.fontSize === 'lg'
      ? '13.5px'
      : '13px'
    : config.fontSize === 'sm'
    ? '12.8px'
    : config.fontSize === 'lg'
    ? '14.2px'
    : '13.5px';

  const outcomeFontSize = isDenseExam ? '11.2px' : isMediumDenseExam ? '11.8px' : '12.2px';
  const subQuestionFontSize = isDenseExam ? '11.5px' : isMediumDenseExam ? '12px' : '12.5px';

  // Exact full-page height for each of the two A4 sheets so there is ZERO blank space at the bottom
  const pageSheetHeight = forPdfExport ? '992px' : '284mm';

  const headerHtml = `
    <!-- Official Exam Header (Logo ONLY on page 1 top-left corner) -->
    <div class="avoid-break" style="flex-shrink: 0; border: 2px solid #1e293b; border-radius: 7px; padding: 8px 10px; background-color: #ffffff; margin-bottom: 8px; page-break-inside: avoid; break-inside: avoid; box-sizing: border-box;">
      <table style="width: 100%; border-collapse: collapse; border-bottom: 1px solid #cbd5e1; table-layout: fixed;">
        <tr>
          <!-- Left: Logo & Brand -->
          <td style="width: 26%; vertical-align: middle; padding-bottom: 6px;">
            <table style="border-collapse: collapse;">
              <tr>
                <td style="vertical-align: middle; padding-right: 8px;">
                  <img
                    src="${TURKCE_ULKUSU_LOGO_DATA_URI}"
                    alt="Türkçe Ülküsü Logo"
                    width="48"
                    height="48"
                    style="width: 48px !important; height: 48px !important; max-width: 48px !important; max-height: 48px !important; object-fit: contain; display: block;"
                  />
                </td>
                <td style="vertical-align: middle;">
                  <div style="font-family: Georgia, 'Times New Roman', serif; font-weight: 900; font-size: 12px; color: #0f172a; line-height: 1.05;">
                    TÜRKÇE ÜLKÜSÜ
                  </div>
                  <div style="font-family: Georgia, 'Times New Roman', serif; font-weight: 900; font-size: 9.5px; letter-spacing: 1.2px; color: #0f172a; margin-top: 2px; line-height: 1;">
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
          <td style="width: 52%; vertical-align: middle; text-align: center; padding: 0 4px 6px 4px;">
            <div style="font-size: 12px; font-weight: 900; text-transform: uppercase; color: #1e293b; margin: 0 0 2px 0; line-height: 1.2;">
              ${school}
            </div>
            <div style="font-size: 13px; font-weight: 900; color: #b91c1c; margin: 0 0 3px 0; line-height: 1.2;">
              ${academic} EĞİTİM ÖĞRETİM YILI ${grade}. SINIF TÜRKÇE DERSİ
            </div>
            <div style="font-size: 10.5px; font-weight: 800; color: #0f172a; line-height: 1.25; margin-bottom: 3px;">
              1. DÖNEM 1. YAZILI SINAVI
            </div>
            <div style="line-height: 1.25;">
              <span style="background-color: #eff6ff; color: #1e3a8a; border: 1px solid #bfdbfe; padding: 1.5px 8px; border-radius: 4px; font-size: 10px; font-weight: 800; display: inline-block;">
                ${scenario.scenarioGroupTitle} • ${scenario.scenarioName}
              </span>
              ${
                isAnswerKey
                  ? `<span style="background-color: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; padding: 1.5px 8px; border-radius: 4px; font-size: 10px; font-weight: 800; display: inline-block; margin-left: 4px;">CEVAP ANAHTARI</span>`
                  : ''
              }
            </div>
          </td>

          <!-- Right: Format Card -->
          <td style="width: 22%; vertical-align: middle; padding-bottom: 6px; padding-left: 6px;">
            <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 5px 7px; text-align: center; line-height: 1.25;">
              <div style="font-size: 9px; font-weight: 700; text-transform: uppercase; color: #64748b;">
                Sınav Formatı
              </div>
              <div style="font-size: 10.5px; font-weight: 900; color: #0f172a; margin-top: 2px;">
                Açık Uçlu Yazılı
              </div>
              <div style="font-size: 10px; font-weight: 800; color: #b91c1c; margin-top: 2px;">
                ${totalPoints} Puan • ${duration} Dk.
              </div>
            </div>
          </td>
        </tr>
      </table>

      ${
        !isAnswerKey
          ? `
        <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 6px; font-size: 11px; table-layout: fixed;">
          <tr>
            <td style="width: 66%; vertical-align: top; padding-right: 8px;">
              <div style="background-color: #f8fafc; padding: 6px 8px; border-radius: 6px; border: 1px solid #cbd5e1;">
                <table style="width: 100%; border-collapse: collapse; font-size: 11px; table-layout: fixed;">
                  <tr>
                    <td style="width: 52%; padding: 2px 4px 2px 0; vertical-align: bottom; white-space: nowrap; overflow: hidden;">
                      <span style="font-weight: 700; color: #334155;">Adı Soyadı: </span>
                      <span style="color: #64748b;">.........................</span>
                    </td>
                    <td style="width: 48%; padding: 2px 0 2px 4px; vertical-align: bottom; white-space: nowrap; overflow: hidden;">
                      <span style="font-weight: 700; color: #334155;">Sınıfı / Şubesi: </span>
                      <span style="font-weight: 700; color: #0f172a;">${classGroup}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 52%; padding: 5px 4px 2px 0; vertical-align: bottom; white-space: nowrap; overflow: hidden;">
                      <span style="font-weight: 700; color: #334155;">Okul Numarası: </span>
                      <span style="color: #64748b;">....................</span>
                    </td>
                    <td style="width: 48%; padding: 5px 0 2px 4px; vertical-align: bottom; white-space: nowrap; overflow: hidden;">
                      <span style="font-weight: 700; color: #334155;">Sınav Tarihi: </span>
                      <span style="font-weight: 700; color: #0f172a;">${dateStr}</span>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
            <td style="width: 34%; vertical-align: top;">
              <div style="background-color: #fef2f2; border: 1.5px solid #dc2626; border-radius: 6px; padding: 4px 8px; text-align: center;">
                <table style="width: 100%; border-collapse: collapse; border-bottom: 1px solid #fecaca; padding-bottom: 2px;">
                  <tr>
                    <td style="text-align: left; font-size: 9.5px; font-weight: 800; color: #7f1d1d;">ALDIĞI NOT</td>
                    <td style="text-align: right; font-size: 9px; color: #64748b; font-weight: 600;">Süre: ${duration} Dk.</td>
                  </tr>
                </table>
                <div style="margin: 2px 0; text-align: center; line-height: 1.2;">
                  <span style="font-size: 15px; font-weight: 900; color: #991b1b;">.....</span>
                  <span style="font-size: 11px; font-weight: 700; color: #64748b;"> / ${totalPoints}</span>
                </div>
                <table style="width: 100%; border-collapse: collapse; border-top: 1px solid #fecaca; padding-top: 2px;">
                  <tr>
                    <td style="text-align: left; font-size: 9px; color: #475569;">Öğrt: ${teacher}</td>
                    <td style="text-align: right; font-size: 9px; color: #475569;">İmza: ......</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      `
          : `
        <div style="margin-top: 7px; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; padding: 6px 10px; font-size: 11px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <strong style="color: #064e3b;">📌 Değerlendirme Kriteri:</strong>
            <span style="color: #065f46; margin-left: 4px;">
              MEB Ölçme ve Değerlendirme Yönetmeliği uyarınca her soru açık uçlu olup tam ve kısmi puan rubriğiyle derecelendirilmiştir.
            </span>
          </div>
          <div style="font-weight: 800; color: #022c22; white-space: nowrap; margin-left: 10px;">
            Toplam: ${scenario.questions.length} Soru • ${totalPoints} Puan
          </div>
        </div>
      `
      }
    </div>
  `;

  const footerHtml = (pageNum: number) => `
    <table class="avoid-break" style="flex-shrink: 0; width: 100%; border-collapse: collapse; margin-top: 6px; border-top: 1.5px solid #1e293b; font-size: 11px; color: #334155; page-break-inside: avoid; break-inside: avoid;">
      <tr>
        <td style="padding-top: 5px; text-align: left;">
          <strong style="color: #0f172a;">Türkçe Ülküsü Yayınları</strong>
          <span> • ${scenario.targetClass || `${grade}. Sınıf`} Yazılıya Hazırlık Serisi</span>
        </td>
        <td style="padding-top: 5px; text-align: right;">
          <span style="color: #64748b; font-weight: 700; margin-right: 8px;">Sayfa ${pageNum} / 2</span>
          <strong style="color: #0f172a;">${pageNum === 2 ? 'Başarılar Dileriz!' : 'Arka Sayfaya Geçiniz →'}</strong>
        </td>
      </tr>
    </table>
  `;

  const renderQuestionCard = (q: ExamScenario['questions'][number], isPage2: boolean) => {
    const cardPadding = isDenseExam
      ? '6px 10px'
      : isMediumDenseExam
      ? '7px 11px'
      : isPage2
      ? '9px 12px'
      : '8px 11px';

    const linesCount = isPage2
      ? page2QuestionCount <= 4
        ? Math.min(Math.max(q.linesNeeded, 4), 5)
        : Math.min(Math.max(q.linesNeeded, 3), 4)
      : page1QuestionCount <= 2
      ? Math.min(Math.max(q.linesNeeded, 4), 5)
      : page1QuestionCount === 3
      ? Math.min(Math.max(q.linesNeeded, 3), 4)
      : Math.min(q.linesNeeded, 2);

    const subQuestionsHtml =
      q.subQuestions && q.subQuestions.length > 0
        ? `<div style="flex: 1 1 auto; display: flex; flex-direction: column; justify-content: space-around; padding-left: 8px; border-left: 2.5px solid #fca5a5; margin-top: 3px;">
            ${q.subQuestions
              .map(
                (sub) => `
                <div style="margin-bottom: 4px;">
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 2px;">
                    <tr>
                      <td style="text-align: left; font-size: ${subQuestionFontSize}; font-weight: 700; color: #1e293b;">${sub.label}:</td>
                      <td style="text-align: right;">
                        <span style="font-size: 10px; font-weight: 700; color: #475569; background-color: #f1f5f9; padding: 1px 6px; border-radius: 4px;">${sub.points} Puan</span>
                      </td>
                    </tr>
                  </table>
                  <div style="font-size: ${subQuestionFontSize}; color: #334155; font-style: italic; margin-bottom: 2px; line-height: 1.32; white-space: pre-line;">${sub.text}</div>
                  ${
                    config.showLines
                      ? `<div style="border-bottom: 1px dashed #94a3b8; height: 15px; margin-top: 2px;"></div>
                         <div style="border-bottom: 1px dashed #94a3b8; height: 15px; margin-top: 2px;"></div>`
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
        ? `<div style="flex: 1 1 auto; display: flex; flex-direction: column; justify-content: space-between; margin-top: 4px; background-color: #f8fafc; padding: 5px 8px 6px 8px; border-radius: 5px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse; flex-shrink: 0;">
              <tr>
                <td style="text-align: left; font-size: 9.5px; font-weight: 700; color: #64748b;">CEVAP ALANI:</td>
                <td style="text-align: right; font-size: 9.5px; font-weight: 600; color: #64748b;">(Açık Uçlu Yanıtınızı Buraya Yazınız)</td>
              </tr>
            </table>
            <div style="flex: 1 1 auto; display: flex; flex-direction: column; justify-content: space-evenly; min-height: ${linesCount * 16}px;">
              ${Array.from({ length: linesCount })
                .map(
                  () =>
                    `<div style="border-bottom: 1px solid #cbd5e1; width: 100%; height: 14px;"></div>`
                )
                .join('')}
            </div>
          </div>`
        : '';

    return `
      <div class="avoid-break" style="flex: 1 1 auto; display: flex; flex-direction: column; justify-content: space-between; border: 1.5px solid #cbd5e1; border-radius: 7px; padding: ${cardPadding}; background-color: #ffffff; page-break-inside: avoid; break-inside: avoid; box-sizing: border-box;">
        <div style="flex-shrink: 0;">
          <table style="width: 100%; border-collapse: collapse; border-bottom: 1px solid #f1f5f9; padding-bottom: 3px; margin-bottom: 4px;">
            <tr>
              <td style="vertical-align: middle; text-align: left; padding-bottom: 3px;">
                <table style="border-collapse: collapse;">
                  <tr>
                    <td style="vertical-align: middle; padding-right: 6px;">
                      <div style="width: 22px; height: 22px; border-radius: 50%; background-color: #b91c1c; color: #ffffff; font-weight: 900; font-size: 11.5px; text-align: center; line-height: 22px;">
                        ${q.number}
                      </div>
                    </td>
                    <td style="vertical-align: middle;">
                      <span style="font-size: ${outcomeFontSize}; font-weight: 700; color: #1e293b; line-height: 1.25;">
                        ${getOfficialOutcomeTitle(q.outcomeCode)}
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
              <td style="vertical-align: middle; text-align: right; width: 78px; padding-bottom: 3px;">
                <span style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 10.5px; font-weight: 900; background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; white-space: nowrap;">
                  ${q.points} Puan
                </span>
              </td>
            </tr>
          </table>
          <div style="font-size: ${promptFontSize}; font-weight: 600; color: #0f172a; margin-bottom: 3px; line-height: 1.36; white-space: pre-line;">${q.prompt}</div>
        </div>
        ${subQuestionsHtml}
        ${linesHtml}
      </div>
    `;
  };

  const page1Questions = scenario.questions.slice(0, page1QuestionCount);
  const page2Questions = scenario.questions.slice(page1QuestionCount);

  if (isAnswerKey) {
    return `
      <div id="pdf-root" style="width: 100%; max-width: 100%; background-color: #ffffff; color: #0f172a; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size: 12.5px; line-height: 1.4; box-sizing: border-box; padding: 2px 4px; margin: 0;">
        ${headerHtml}
        <div class="avoid-break" style="margin-bottom: 10px; background-color: #ecfdf5; border: 1px solid #6ee7b7; border-radius: 7px; padding: 9px 12px; page-break-inside: avoid; break-inside: avoid;">
          <div style="font-weight: 900; font-size: 12px; color: #022c22; text-transform: uppercase; margin-bottom: 3px;">
            Türkiye Yüzyılı Maarif Modeli Dereceli Puanlama Yönergesi
          </div>
          <div style="font-size: 11px; color: #065f46; line-height: 1.4;">
            Bu sınav, MEB Ölçme ve Değerlendirme Yönetmeliği esaslarına göre öğrencilerin ezber bilgilerini değil; metinden anlam kurma, bağlamdan tahmin yürütme, derin çıkarım yapma, söz varlığını zenginleştirme ve yazım/noktalama kurallarını metin içinde uygulayabilme becerilerini ölçmek için tasarlanmıştır.
          </div>
        </div>
        <div>
          ${scenario.questions
            .map((q, idx) => {
              const subSolutionsHtml =
                q.subQuestions && q.subQuestions.length > 0
                  ? q.subQuestions
                      .map(
                        (sub) => `
                        <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; padding: 7px 9px; margin-bottom: 6px;">
                          <table style="width: 100%; border-collapse: collapse; margin-bottom: 3px;">
                            <tr>
                              <td style="text-align: left; font-weight: 800; font-size: 11px; color: #022c22;">${sub.label}</td>
                              <td style="text-align: right; font-weight: 800; font-size: 10.5px; color: #065f46;">${sub.points} Puan</td>
                            </tr>
                          </table>
                          <div style="font-size: 11px; color: #334155; font-style: italic; margin-bottom: 4px;">${sub.text}</div>
                          <div style="font-size: 11.5px; color: #022c22; font-weight: 500; white-space: pre-line; background-color: #ffffff; padding: 6px 8px; border-radius: 5px; border: 1px solid #a7f3d0; line-height: 1.4;">${sub.expectedAnswer}</div>
                        </div>
                      `
                      )
                      .join('')
                  : `
                    <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; padding: 7px 9px;">
                      <div style="font-weight: 800; font-size: 11px; color: #064e3b; margin-bottom: 4px;">
                        ✓ Örnek / Model Tam Puanlık Yanıt:
                      </div>
                      <div style="font-size: 11.5px; color: #022c22; font-weight: 500; white-space: pre-line; background-color: #ffffff; padding: 6px 8px; border-radius: 5px; border: 1px solid #a7f3d0; line-height: 1.4;">${q.expectedAnswer}</div>
                    </div>
                  `;

              const rubricRowsHtml = q.rubric
                .map(
                  (r) => `
                  <tr>
                    <td style="padding: 4px 6px; border-top: 1px solid #e2e8f0; color: #1e293b;">${r.criterion}</td>
                    <td style="padding: 4px 6px; border-top: 1px solid #e2e8f0; text-align: right; font-weight: 900; color: #065f46; white-space: nowrap;">${r.points} Puan</td>
                  </tr>
                `
                )
                .join('');

              const pageBreakHtml =
                idx === page1QuestionCount
                  ? `<div class="html2pdf__page-break" style="page-break-before: always; break-before: page; height: 0;"></div>`
                  : '';

              return `
                ${pageBreakHtml}
                <div class="avoid-break" style="border: 1px solid #cbd5e1; border-radius: 7px; padding: 8px 11px; background-color: #ffffff; margin-bottom: 8px; page-break-inside: avoid; break-inside: avoid;">
                  <table style="width: 100%; border-collapse: collapse; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px; margin-bottom: 5px;">
                    <tr>
                      <td style="text-align: left; vertical-align: middle; padding-bottom: 4px;">
                        <span style="display: inline-block; width: 21px; height: 21px; border-radius: 50%; background-color: #047857; color: #ffffff; font-weight: 900; font-size: 11.5px; text-align: center; line-height: 21px; margin-right: 6px;">${q.number}</span>
                        <span style="font-size: 11.5px; font-weight: 700; color: #1e293b;">${getOfficialOutcomeTitle(q.outcomeCode)}</span>
                      </td>
                      <td style="text-align: right; vertical-align: middle; width: 78px; padding-bottom: 4px;">
                        <span style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 10.5px; font-weight: 900; background-color: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; white-space: nowrap;">${q.points} Puan</span>
                      </td>
                    </tr>
                  </table>
                  <div style="font-size: 11.5px; font-weight: 600; color: #334155; background-color: #f8fafc; padding: 5px 8px; border-radius: 5px; border: 1px solid #e2e8f0; margin-bottom: 6px; white-space: pre-line;">
                    <strong style="color: #0f172a;">Soru: </strong>${q.prompt}
                  </div>
                  ${subSolutionsHtml}
                  <div style="margin-top: 6px;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 10.5px; border: 1px solid #e2e8f0;">
                      <thead>
                        <tr style="background-color: #f1f5f9; color: #1e293b; font-weight: 800;">
                          <th style="padding: 4px 6px; text-align: left;">Dereceli Puanlama Ölçütü (Rubrik)</th>
                          <th style="padding: 4px 6px; text-align: right; width: 75px;">Puan</th>
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
        ${footerHtml(2)}
      </div>
    `;
  }

  return `
    <div id="pdf-root" style="width: 100%; max-width: 100%; background-color: #ffffff; color: #0f172a; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size: 13px; line-height: 1.4; box-sizing: border-box; padding: 0 2px; margin: 0;">
      <!-- ==================== 1. A4 SAYFASI (Sıfır Alt Boşluk) ==================== -->
      <div class="a4-page-sheet" style="height: ${pageSheetHeight}; min-height: ${pageSheetHeight}; max-height: ${pageSheetHeight}; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box;">
        ${headerHtml}

        <!-- Reading Passage Box -->
        <div class="avoid-break" style="flex-shrink: 0; border: 1.5px solid #cbd5e1; background-color: #f8fafc; border-radius: 7px; padding: 9px 12px; margin-bottom: 8px; page-break-inside: avoid; break-inside: avoid; box-sizing: border-box;">
          <table style="width: 100%; border-collapse: collapse; border-bottom: 1px solid #e2e8f0; margin-bottom: 6px;">
            <tr>
              <td style="text-align: left; padding-bottom: 4px; font-size: 14px; font-weight: 900; color: #0f172a;">
                ${scenario.readingPassage.title}
              </td>
              <td style="text-align: right; padding-bottom: 4px; font-size: 10.5px; font-weight: 600; color: #64748b; font-style: italic;">
                ${scenario.readingPassage.author}
              </td>
            </tr>
          </table>
          <div style="font-family: Georgia, 'Times New Roman', serif; font-size: ${passageFontSize}; color: #1e293b; text-align: justify; white-space: pre-line; line-height: 1.42;">${scenario.readingPassage.content}</div>
          <div style="margin-top: 6px; padding-top: 4px; border-top: 1px solid #e2e8f0; text-align: right; font-size: 10.5px; font-weight: 700; color: #991b1b;">
            (İlk soruları yukarıdaki metne göre cevaplayınız.)
          </div>
        </div>

        <!-- Page 1 Questions Container (Fills remaining vertical space of Page 1) -->
        <div style="flex: 1 1 auto; display: flex; flex-direction: column; justify-content: space-between; gap: 7px; min-height: 0;">
          ${page1Questions.map((q) => renderQuestionCard(q, false)).join('')}
        </div>

        ${footerHtml(1)}
      </div>

      <!-- Clean Page Break between Page 1 and Page 2 -->
      ${
        page2Questions.length > 0
          ? `
        <div class="html2pdf__page-break" style="page-break-before: always; break-before: page; height: 0; margin: 0; padding: 0;"></div>

        <!-- ==================== 2. A4 SAYFASI (Sıfır Alt Boşluk) ==================== -->
        <div class="a4-page-sheet" style="height: ${pageSheetHeight}; min-height: ${pageSheetHeight}; max-height: ${pageSheetHeight}; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; padding-top: 2px;">
          <!-- Page 2 Questions Container (Fills entire Page 2 down to footer) -->
          <div style="flex: 1 1 auto; display: flex; flex-direction: column; justify-content: space-between; gap: 8px; min-height: 0;">
            ${page2Questions.map((q) => renderQuestionCard(q, true)).join('')}
          </div>

          ${footerHtml(2)}
        </div>
      `
          : ''
      }
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
  const bodyInner = generatePrintablebodyInner(scenario, config, isAnswerKey, false);

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>${school} - ${grade}. Sınıf Türkçe 1. Dönem 1. Yazılı - Türkçe Ülküsü Yayınları</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 6mm 8mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    html, body {
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

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = generatePrintablebodyInner(scenario, config, isAnswerKey, true);
  tempDiv.style.width = '680px';
  tempDiv.style.maxWidth = '100%';
  tempDiv.style.backgroundColor = '#ffffff';
  tempDiv.style.color = '#0f172a';
  tempDiv.style.padding = '0 4px';
  tempDiv.style.margin = '0';
  tempDiv.style.boxSizing = 'border-box';

  const opt = {
    margin: [5, 8, 5, 8] as [number, number, number, number],
    filename,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      scrollX: 0,
      scrollY: 0,
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
    pagebreak: { mode: ['css', 'legacy'], avoid: ['.avoid-break'] },
  };

  await html2pdf().set(opt).from(tempDiv).save();
}
