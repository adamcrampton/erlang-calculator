<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Erlang Calculator</title>

        <!-- Favicon-->
        {{-- <link rel="icon" type="image/x-icon" href="assets/favicon.ico" /> --}}

        <!-- Custom Google font-->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
        <!-- Bootstrap icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
        <!-- Core theme CSS -->
        <link href="{{ asset('css/vendor/theme/styles.css') }}" rel="stylesheet" />
        {{-- App CSS --}}
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
    </head>
    <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div class="container px-5">
                    <a class="navbar-brand" href="index.html"><span class="fw-bolder text-primary">Call Center Toolkit</span></a>
                    {{-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li class="nav-item"><a class="nav-link" href="index.html"></a></li>
                        </ul>
                    </div> --}}
                </div>
            </nav>
            <!-- Main Section-->
            <section class="py-5">
                <div class="container px-5 pb-5">
                    <div class="row gx-5">
                        <div class="col-xxl-5">
                            <div class="text-center text-xxl-start">
                                <h1 class="display-3 fw-bolder mb-5"><span class="text-gradient d-inline">Erlang Calculator</span></h1>
                                <div class="badge bg-gradient-primary-to-secondary text-white mb-2"><div class="text-uppercase">About This Calculator</div></div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </div>
                        <div class="col-xxl-7">
                            <!-- Calculator Section-->
                            <div class="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div class="flex-grow-1" id="root"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Secondary Section-->
            <section class="bg-light py-5">
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        
                    </div>
                </div>
            </section>
        </main>
        <!-- Footer-->
        <footer class="bg-white py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0">Copyright &copy; 2023</div></div>
                </div>
            </div>
        </footer>
        {{-- App JS --}}
        <script src="{{ asset('js/calculators/erlang/index.js') }}"></script>
    </body>
</html>
