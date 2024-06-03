<script setup>
import html2pdf from 'html2pdf.js';
import { useRouter } from 'vue-router';
  const router = useRouter();
function downloadCertificate() {
    const element = document.querySelector('.pm-certificate-container');
    const options = {
        margin: 1,
        filename: 'certificate.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Use html2pdf to generate PDF
    html2pdf().set(options).from(element).save();
}

const redirectBack = () => {

router.push('/investment'); // Redirect to /certificate page
};
</script>
<template>
<svg @click="redirectBack" xmlns="http://www.w3.org/2000/svg" width="30" height="30" style="margin-left:40px;margin-top:20px;" fill="white" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
</svg>
    <body>
       

        <div class="container pm-certificate-container">
            <div class="outer-border"></div>
            <div class="inner-border"></div>

            <div class="pm-certificate-border col-xs-12">
                <div class="row pm-certificate-header">
                    <div class="pm-certificate-title cursive col-xs-12 text-center">
                        <h2>XiLiJiJi</h2>
                    </div>
                </div>

                <div class="row pm-certificate-body">

                    <div class="pm-certificate-block">
                        <div class="col-xs-12">
                            <div class="row">
                                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                                <div class="pm-certificate-name underline margin-0 col-xs-8 text-center">
                                    <span class="pm-name-text bold">Wong Yu Hui</span>
                                </div>
                                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                            </div>
                        </div>

                        <div class="col-xs-12">
                            <div class="row">
                                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                                <div class="pm-earned col-xs-8 text-center">
                                    <span class="pm-earned-text padding-0 block cursive">has earned</span>
                                    <span class="pm-credits-text block bold sans">584 shares</span>
                                </div>
                                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                                <div class="col-xs-12"></div>
                            </div>
                        </div>

                        <div class="col-xs-12">
                            <div class="row">
                                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>

                                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                            </div>
                        </div>

                        <div class="col-xs-12">
                            <div class="row">
                                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                                <div class="pm-course-title underline col-xs-8 text-center">
                                    <span class="pm-credits-text block bold sans">Transaction ID:
                                        0x3142Osdad1231nwe12414312</span>
                                </div>
                                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12">
                        <div class="row">
                            <div class="pm-certificate-footer">
                                <div class="col-xs-4  col-xs-4 text-center">
                                    <span class="pm-credits-text block bold sans ">ABC Company</span>
                                    <span class="pm-empty-space block underline"></span>
                                    <span class="bold block pm-certified">4 March 2024</span>
                                </div>
                                <div class="col-xs-4">
                                    <!-- LEAVE EMPTY -->
                                </div>
                                <div class="col-xs-4 pm-certified col-xs-4 text-center">
                                    <span class="pm-credits-text block sans">Date Invested</span>
                                    <span class="pm-empty-space block underline"></span>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </body>
    <div class="justify-content-center align-items-center d-flex m-4" style="width:100%;">
        <button @click="downloadCertificate">Download Certificate</button>
    </div>
</template>

<style scoped>
button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #2dce89;
    color: white;
}

button:hover{
    cursor: pointer;
    background-color: #028c50;
    color: white;
}

svg:hover{
    color:rgb(191, 191, 191);
    cursor:pointer;
    transition: all 0.3s ease;
}

@import url('https://fonts.googleapis.com/css?family=Open+Sans|Pinyon+Script|Rochester');



.cursive {
    font-family: 'Pinyon Script', cursive;
}

.sans {
    font-family: 'Open Sans', sans-serif;
}

.bold {
    font-weight: bold;
}

.block {
    display: block;
}

.underline {
    border-bottom: 1px solid #777;
    padding: 5px;
    margin-bottom: 15px;
}

.margin-0 {
    margin: 0;
}

.padding-0 {
    padding: 0;
}

.pm-empty-space {
    height: 40px;
    width: 100%;
}

body {
    padding: 20px 0;
    background: #ccc;
}

.pm-certificate-container {
    position: relative;
    width: 8.27in;
    height: 600px;
    background-color: #618597;
    padding: 30px;
    color: #333;
    font-family: 'Open Sans', sans-serif;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);

    .outer-border {
        width: 794px;
        height: 594px;
        position: absolute;
        left: 50%;
        margin-left: -397px;
        top: 50%;
        margin-top: -297px;
        border: 2px solid #fff;
    }

    .inner-border {
        width: 730px;
        height: 530px;
        position: absolute;
        left: 50%;
        margin-left: -365px;
        top: 50%;
        margin-top: -265px;
        border: 2px solid #fff;
    }

    .pm-certificate-border {
        position: relative;
        width: 720px;
        height: 520px;
        padding: 0;
        border: 1px solid #E1E5F0;
        background-color: rgba(255, 255, 255, 1);
        background-image: none;
        left: 50%;
        margin-left: -360px;
        top: 50%;
        margin-top: -260px;

        .pm-certificate-block {
            width: 650px;
            height: 200px;
            position: relative;
            left: 50%;
            margin-left: -325px;
            top: 70px;
            margin-top: 0;
        }

        .pm-certificate-header {
            margin-bottom: 10px;
        }

        .pm-certificate-title {
            position: relative;
            top: 40px;

            h2 {
                font-size: 34px !important;
            }
        }

        .pm-certificate-body {
            padding: 20px;

            .pm-name-text {
                font-size: 20px;
            }
        }

        .pm-earned {
            margin: 15px 0 20px;

            .pm-earned-text {
                font-size: 20px;
            }

            .pm-credits-text {
                font-size: 15px;
            }
        }

        .pm-course-title {
            .pm-earned-text {
                font-size: 20px;
            }

            .pm-credits-text {
                font-size: 15px;
            }
        }

        .pm-certified {
            font-size: 12px;

            .underline {
                margin-bottom: 5px;
            }
        }

        .pm-certificate-footer {
            width: 650px;
            height: 100px;
            position: relative;
            left: 50%;
            margin-left: -325px;
            bottom: -105px;
        }
    }
}
</style>