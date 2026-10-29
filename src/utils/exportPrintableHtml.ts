import { ExamScenario, CustomExamConfig } from '../types/exam';
import { getOfficialOutcomeTitle } from '../data/learningOutcomes';
import { TURKCE_ULKUSU_LOGO_DATA_URI } from '../assets/logoDataUri';

export function generatePrintableHtml(
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
    config.fontSize === 'sm' ? '12px' : config.fontSize === 'lg' ? '15.5px' : '13.5px';

  const headerBottomHtml = !isAnswerKey
    ? `
      <div class="student-score-grid">
        <div class="student-info-box">
          <div class="info-row">
            <span class="info-label">Adı Soyadı:</span>
            <span class="info-line"></span>
          </div>
          <div class="info-row">
            <span class="info-label">Sınıfı / Şubesi:</span>
            <span class="info-line">${classGroup}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Okul Numarası:</span>
            <span class="info-line"></span>
          </div>
          <div class="info-row">
            <span class="info-label">Sınav Tarihi:</span>
            <span class="info-line">${dateStr}</span>
          </div>
        </div>
        <div class="score-box">
          <div class="score-top">
            <span>ALDIĞI NOT</span>
            <span style="font-size: 9px; color: #64748b; font-weight: 500;">Süre: ${duration} Dk.</span>
          </div>
          <div class="score-mid">
            <span style="font-size: 20px; font-weight: 900; color: #991b1b;">.....</span>
            <span style="font-size: 13px; font-weight: 700; color: #64748b; margin-left: 4px;">/ ${totalPoints}</span>
          </div>
          <div class="score-bot">
            <span>Öğretmen: ${teacher}</span>
            <span>İmza: ..........</span>
          </div>
        </div>
      </div>
    `
    : `
      <div class="answer-key-banner">
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
      <div class="passage-box avoid-break">
        <div class="passage-header">
          <div class="passage-title-wrap">
            <span class="book-icon">📖</span>
            <h3 class="passage-title">${scenario.readingPassage.title}</h3>
          </div>
          <span class="passage-author">${scenario.readingPassage.author}</span>
        </div>
        <div class="passage-content" style="font-size: ${passageFontSize};">${scenario.readingPassage.content}</div>
        <div class="passage-footer">
          (1, 2, 3, 4 ve 5. soruları yukarıdaki metne göre cevaplayınız.)
        </div>
      </div>

      <!-- Questions List -->
      <div class="questions-container">
        ${scenario.questions
          .map((q) => {
            const subQuestionsHtml =
              q.subQuestions && q.subQuestions.length > 0
                ? `<div class="subquestions-wrap">
                    ${q.subQuestions
                      .map(
                        (sub) => `
                        <div class="subquestion-item">
                          <div class="subquestion-head">
                            <span class="subquestion-label">${sub.label}:</span>
                            <span class="subquestion-points">${sub.points} Puan</span>
                          </div>
                          <div class="subquestion-text">${sub.text}</div>
                          ${
                            config.showLines
                              ? `<div class="dashed-line"></div><div class="dashed-line"></div>`
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
                ? `<div class="answer-area-box">
                    <div class="answer-area-head">
                      <span>CEVAP ALANI:</span>
                      <span>(Açık Uçlu Yanıtınızı Buraya Yazınız)</span>
                    </div>
                    ${Array.from({ length: q.linesNeeded })
                      .map(() => `<div class="solid-line"></div>`)
                      .join('')}
                  </div>`
                : '';

            return `
              <div class="question-card avoid-break">
                <div class="question-header">
                  <div class="question-title-group">
                    <span class="question-num-badge">${q.number}</span>
                    <span class="question-outcome">${getOfficialOutcomeTitle(q.outcomeCode)}</span>
                  </div>
                  <span class="question-points-pill">${q.points} Puan</span>
                </div>
                <div class="question-prompt">${q.prompt}</div>
                ${subQuestionsHtml}
                ${linesHtml}
              </div>
            `;
          })
          .join('')}
      </div>
    `
    : `
      <div class="rubric-intro avoid-break">
        <div style="font-weight: 900; font-size: 13px; color: #022c22; text-transform: uppercase; margin-bottom: 4px;">
          Türkiye Yüzyılı Maarif Modeli Dereceli Puanlama Yönergesi
        </div>
        <div style="font-size: 11.5px; color: #065f46; line-height: 1.5;">
          Bu sınav, MEB Ölçme ve Değerlendirme Yönetmeliği esaslarına göre öğrencilerin ezber bilgilerini değil; metinden anlam kurma, bağlamdan tahmin yürütme, derin çıkarım yapma, söz varlığını zenginleştirme ve yazım/noktalama kurallarını metin içinde uygulayabilme becerilerini ölçmek için tasarlanmıştır.
        </div>
      </div>

      <div class="questions-container">
        ${scenario.questions
          .map((q) => {
            const subSolutionsHtml =
              q.subQuestions && q.subQuestions.length > 0
                ? q.subQuestions
                    .map(
                      (sub) => `
                      <div class="ans-box" style="margin-bottom: 8px;">
                        <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 11.5px; color: #022c22; margin-bottom: 4px;">
                          <span>${sub.label}</span>
                          <span>${sub.points} Puan</span>
                        </div>
                        <div style="font-size: 11.5px; color: #334155; font-style: italic; margin-bottom: 6px;">${sub.text}</div>
                        <div class="ans-expected">${sub.expectedAnswer}</div>
                      </div>
                    `
                    )
                    .join('')
                : `
                  <div class="ans-box">
                    <div style="font-weight: 800; font-size: 11.5px; color: #064e3b; margin-bottom: 6px;">
                      ✓ Örnek / Model Tam Puanlık Yanıt:
                    </div>
                    <div class="ans-expected">${q.expectedAnswer}</div>
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
              <div class="question-card avoid-break">
                <div class="question-header">
                  <div class="question-title-group">
                    <span class="question-num-badge" style="background: #047857;">${q.number}</span>
                    <span class="question-outcome">${getOfficialOutcomeTitle(q.outcomeCode)}</span>
                  </div>
                  <span class="question-points-pill" style="background: #d1fae5; color: #065f46; border-color: #6ee7b7;">${q.points} Puan</span>
                </div>
                <div style="font-size: 12px; font-weight: 600; color: #334155; background: #f8fafc; padding: 8px 10px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 10px; white-space: pre-line;">
                  <strong style="color: #0f172a; display: block; margin-bottom: 2px;">Soru Metni:</strong>${q.prompt}
                </div>
                ${subSolutionsHtml}
                <div style="margin-top: 10px;">
                  <div style="font-size: 10.5px; font-weight: 800; color: #334155; text-transform: uppercase; margin-bottom: 4px;">
                    Dereceli Puanlama Anahtarı (Rubrik)
                  </div>
                  <table style="width: 100%; border-collapse: collapse; font-size: 11.5px; border: 1px solid #e2e8f0;">
                    <thead>
                      <tr style="background: #f1f5f9; color: #1e293b; font-weight: 800;">
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
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      margin: 0;
      padding: 0;
      font-size: 13px;
      line-height: 1.45;
    }
    #pdf-root {
      width: 100%;
      background: #ffffff;
      color: #0f172a;
    }
    .avoid-break {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }
    .exam-header-card {
      border: 2px solid #1e293b;
      border-radius: 8px;
      padding: 12px 14px;
      background: #ffffff;
      margin-bottom: 16px;
    }
    .header-top-grid {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 10px;
    }
    .brand-left {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 26%;
      flex-shrink: 0;
    }
    .brand-logo-img {
      width: 68px;
      height: 68px;
      object-fit: contain;
      flex-shrink: 0;
    }
    .brand-title {
      font-family: Georgia, 'Times New Roman', serif;
      font-weight: 900;
      font-size: 13.5px;
      color: #0f172a;
      line-height: 1.05;
    }
    .brand-sub {
      font-family: Georgia, 'Times New Roman', serif;
      font-weight: 900;
      font-size: 10.5px;
      letter-spacing: 1.5px;
      color: #0f172a;
      margin-top: 3px;
      line-height: 1;
    }
    .brand-caption {
      font-size: 9px;
      font-weight: 600;
      color: #64748b;
      margin-top: 3px;
    }
    .header-center {
      flex: 1;
      text-align: center;
      padding: 0 4px;
    }
    .school-title {
      font-size: 13.5px;
      font-weight: 900;
      text-transform: uppercase;
      color: #1e293b;
      margin: 0 0 3px 0;
      letter-spacing: 0.3px;
    }
    .academic-title {
      font-size: 14.5px;
      font-weight: 900;
      color: #b91c1c;
      margin: 0 0 6px 0;
    }
    .exam-badges-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      flex-wrap: wrap;
      font-size: 11.5px;
      font-weight: 800;
      color: #0f172a;
    }
    .scenario-badge {
      background: #eff6ff;
      color: #1e3a8a;
      border: 1px solid #bfdbfe;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 800;
    }
    .answer-badge {
      background: #d1fae5;
      color: #065f46;
      border: 1px solid #6ee7b7;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 800;
    }
    .header-right {
      width: 22%;
      display: flex;
      justify-content: flex-end;
      flex-shrink: 0;
    }
    .format-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 7px 11px;
      text-align: right;
      line-height: 1.25;
    }
    .student-score-grid {
      display: flex;
      gap: 10px;
      margin-top: 10px;
      align-items: stretch;
    }
    .student-info-box {
      flex: 2;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 12px;
      row-gap: 6px;
      background: #f8fafc;
      padding: 8px 10px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
      font-size: 11.5px;
    }
    .info-row {
      display: flex;
      align-items: center;
    }
    .info-label {
      font-weight: 700;
      color: #334155;
      width: 92px;
      flex-shrink: 0;
    }
    .info-line {
      border-bottom: 1px dotted #94a3b8;
      flex: 1;
      height: 18px;
      color: #1e293b;
      font-weight: 600;
      padding-left: 4px;
    }
    .score-box {
      flex: 1;
      background: #fef2f2;
      border: 2px solid #dc2626;
      border-radius: 6px;
      padding: 6px 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
    }
    .score-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
      font-weight: 800;
      color: #7f1d1d;
      border-bottom: 1px solid #fecaca;
      padding-bottom: 2px;
    }
    .score-mid {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 3px 0;
    }
    .score-bot {
      font-size: 9px;
      color: #475569;
      border-top: 1px solid #fecaca;
      padding-top: 2px;
      display: flex;
      justify-content: space-between;
    }
    .answer-key-banner {
      margin-top: 10px;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 11.5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .passage-box {
      border: 2px solid #cbd5e1;
      background: #f8fafc;
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 16px;
    }
    .passage-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 6px;
      margin-bottom: 10px;
    }
    .passage-title-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .book-icon {
      font-size: 16px;
    }
    .passage-title {
      font-size: 15px;
      font-weight: 900;
      color: #0f172a;
      margin: 0;
    }
    .passage-author {
      font-size: 11px;
      font-weight: 600;
      color: #64748b;
      font-style: italic;
    }
    .passage-content {
      font-family: Georgia, 'Times New Roman', serif;
      color: #1e293b;
      text-align: justify;
      white-space: pre-line;
      line-height: 1.58;
    }
    .passage-footer {
      margin-top: 10px;
      padding-top: 6px;
      border-top: 1px solid #e2e8f0;
      text-align: right;
      font-size: 11px;
      font-weight: 700;
      color: #991b1b;
    }
    .question-card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 12px 14px;
      background: #ffffff;
      margin-bottom: 14px;
    }
    .question-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 6px;
      margin-bottom: 8px;
    }
    .question-title-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .question-num-badge {
      width: 26px;
      height: 26px;
      border-radius: 9999px;
      background: #b91c1c;
      color: #ffffff;
      font-weight: 900;
      font-size: 13px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .question-outcome {
      font-size: 12.5px;
      font-weight: 700;
      color: #1e293b;
    }
    .question-points-pill {
      padding: 2px 10px;
      border-radius: 9999px;
      font-size: 11.5px;
      font-weight: 900;
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #fca5a5;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .question-prompt {
      font-size: 13.5px;
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 10px;
      line-height: 1.45;
      white-space: pre-line;
    }
    .subquestions-wrap {
      padding-left: 10px;
      border-left: 2px solid #fecaca;
      margin-bottom: 8px;
    }
    .subquestion-item {
      margin-bottom: 8px;
    }
    .subquestion-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3px;
    }
    .subquestion-label {
      font-size: 12.5px;
      font-weight: 700;
      color: #1e293b;
    }
    .subquestion-points {
      font-size: 11px;
      font-weight: 700;
      color: #64748b;
      background: #f1f5f9;
      padding: 1px 6px;
      border-radius: 4px;
    }
    .subquestion-text {
      font-size: 12.5px;
      color: #334155;
      font-style: italic;
      margin-bottom: 4px;
    }
    .dashed-line {
      border-bottom: 1px dashed #cbd5e1;
      height: 20px;
      margin-top: 4px;
    }
    .answer-area-box {
      margin-top: 8px;
      background: #f8fafc;
      padding: 8px 10px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }
    .answer-area-head {
      font-size: 10px;
      font-weight: 700;
      color: #94a3b8;
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
    }
    .solid-line {
      border-bottom: 1px solid #cbd5e1;
      height: 22px;
      margin-top: 4px;
    }
    .rubric-intro {
      margin-bottom: 14px;
      background: #ecfdf5;
      border: 1px solid #6ee7b7;
      border-radius: 8px;
      padding: 12px 14px;
    }
    .ans-box {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      border-radius: 8px;
      padding: 10px;
    }
    .ans-expected {
      font-size: 12.5px;
      color: #022c22;
      font-weight: 500;
      white-space: pre-line;
      background: #ffffff;
      padding: 8px 10px;
      border-radius: 6px;
      border: 1px solid #a7f3d0;
      line-height: 1.5;
    }
    .exam-footer {
      margin-top: 20px;
      padding-top: 10px;
      border-top: 2px solid #1e293b;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11.5px;
      color: #475569;
    }
    .footer-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .footer-logo {
      width: 22px;
      height: 22px;
      object-fit: contain;
    }
  </style>
</head>
<body>
  <div id="pdf-root">
    <!-- Official Exam Header -->
    <div class="exam-header-card avoid-break">
      <div class="header-top-grid">
        <div class="brand-left">
          <img src="${TURKCE_ULKUSU_LOGO_DATA_URI}" alt="Türkçe Ülküsü Logo" class="brand-logo-img" />
          <div>
            <div class="brand-title">TÜRKÇE ÜLKÜSÜ</div>
            <div class="brand-sub">YAYINLARI</div>
            <div class="brand-caption">Ölçme & Değerlendirme</div>
          </div>
        </div>

        <div class="header-center">
          <h1 class="school-title">${school}</h1>
          <h2 class="academic-title">${academic} EĞİTİM ÖĞRETİM YILI ${grade}. SINIF TÜRKÇE DERSİ</h2>
          <div class="exam-badges-row">
            <span>1. DÖNEM 1. YAZILI SINAVI</span>
            <span style="color: #94a3b8;">•</span>
            <span class="scenario-badge">${scenario.scenarioGroupTitle} • ${scenario.scenarioName}</span>
            ${
              isAnswerKey
                ? `<span class="answer-badge">CEVAP ANAHTARI & PUANLAMA RUBRİĞİ</span>`
                : ''
            }
          </div>
        </div>

        <div class="header-right">
          <div class="format-card">
            <span style="display: block; font-size: 9.5px; font-weight: 700; text-transform: uppercase; color: #64748b;">
              Sınav Formatı
            </span>
            <span style="display: block; font-size: 11.5px; font-weight: 900; color: #0f172a; margin-top: 2px;">
              Açık Uçlu Yazılı
            </span>
            <span style="display: block; font-size: 10px; font-weight: 800; color: #b91c1c; margin-top: 2px;">
              ${totalPoints} Puan • ${duration} Dk.
            </span>
          </div>
        </div>
      </div>

      ${headerBottomHtml}
    </div>

    ${bodyContentHtml}

    <!-- Exam Paper Footer -->
    <div class="exam-footer avoid-break">
      <div class="footer-left">
        <img src="${TURKCE_ULKUSU_LOGO_DATA_URI}" alt="Türkçe Ülküsü Logo" class="footer-logo" />
        <strong style="color: #1e293b;">Türkçe Ülküsü Yayınları</strong>
        <span>• ${scenario.targetClass || `${grade}. Sınıf`} Yazılıya Hazırlık Serisi</span>
      </div>
      <div>
        <strong style="color: #1e293b;">Başarılar Dileriz!</strong>
      </div>
    </div>
  </div>
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

  const html = generatePrintableHtml(scenario, config, isAnswerKey);

  // Render inside an isolated iframe so html2canvas only sees clean #hex CSS (no Tailwind v4 oklch)
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.left = '-9999px';
  iframe.style.top = '0';
  iframe.style.width = '794px';
  iframe.style.height = '1123px';
  iframe.style.border = '0';
  document.body.appendChild(iframe);

  try {
    const frameDoc = iframe.contentWindow?.document || iframe.contentDocument;
    if (!frameDoc) {
      throw new Error('PDF oluşturma çerçevesi başlatılamadı.');
    }

    frameDoc.open();
    frameDoc.write(html);
    frameDoc.close();

    // Wait briefly for embedded base64 images to decode
    await new Promise((r) => setTimeout(r, 250));

    const targetElement = frameDoc.getElementById('pdf-root') || frameDoc.body;

    const opt = {
      margin: [10, 10, 10, 10] as [number, number, number, number],
      filename,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 794,
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
      pagebreak: { mode: ['css', 'legacy'], avoid: ['.avoid-break'] },
    };

    await html2pdf().set(opt).from(targetElement).save();
  } finally {
    if (iframe.parentElement) {
      iframe.remove();
    }
  }
}
