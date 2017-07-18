테스트를 위해서 apache를 다음과 같이 설정한다.

        ServerName test.localhost

        DocumentRoot TEST_ROOT/martn_example_web

        ErrorLog ${APACHE_LOG_DIR}/error.test.log
        CustomLog ${APACHE_LOG_DIR}/access.test.log combined

html에서 전송 버튼을 누르면 아래와 같은 결과를 확인할 수 있다.
    <응답>
    msg: 데이터 전달 드립니다.
    query: 아버지가 방에 들어 가신다.

테스트 중 혹시 Forbidden 오류가 발생하면 아래와 같이 Options에 Indexes를 추가한다.
    <Directory />
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>

api가 필요하기 때문에 반드시 example_api에 대한 tomcat을 테스트 전에 실행해 놓으셔야 합니다.