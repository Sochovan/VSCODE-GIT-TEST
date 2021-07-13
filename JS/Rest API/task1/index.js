// Web service = это сущность, которая позволяет обмениваться информацией с другими серверами
// API (Application Programming Interface) это стандартизированный веб сервис, где более четкие правила обмена информацией
// Rest API - это архитектурный стиль (подход) для создания веб-сервиса. Все запросы производятся через http протокол
// REST reqeust consists of such componnets:
// URL Path;
// HTTP Method[GET, PUT, POST,Patch,DELETE]
// Header(optional)
// Parameters(optional)
// Body(optional) - кладут ту инфу, которую хотят сохранить на сервере

Принципы REST API
1. Uniform resource identifiers
2. Statelessness
3. Client-Server model
4. Caching
5. Layered architecture

// статус-коды:
// 200(ok)
// 201(created)
// 400(bad request)
// 401(unauthorized)
// 403(forbidden)
// 404(not found)
// 415(unsupported media type)
// 500(internal server error)

// Query parameters - передаем доп инфу после rootа URL
