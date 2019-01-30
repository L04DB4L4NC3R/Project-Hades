// THIS FILE IS AUTO GENERATED BY GK-CLI DO NOT EDIT!!
package service

import (
	endpoint "github.com/GDGVIT/Project-Hades/attendance/pkg/endpoint"
	http1 "github.com/GDGVIT/Project-Hades/attendance/pkg/http"
	service "github.com/GDGVIT/Project-Hades/attendance/pkg/service"
	endpoint1 "github.com/go-kit/kit/endpoint"
	log "github.com/go-kit/kit/log"
	prometheus "github.com/go-kit/kit/metrics/prometheus"
	opentracing "github.com/go-kit/kit/tracing/opentracing"
	http "github.com/go-kit/kit/transport/http"
	group "github.com/oklog/oklog/pkg/group"
	opentracinggo "github.com/opentracing/opentracing-go"
)

func createService(endpoints endpoint.Endpoints) (g *group.Group) {
	g = &group.Group{}
	initHttpHandler(endpoints, g)
	return g
}
func defaultHttpOptions(logger log.Logger, tracer opentracinggo.Tracer) map[string][]http.ServerOption {
	options := map[string][]http.ServerOption{
		"DeleteCoupon":     {http.ServerErrorEncoder(http1.ErrorEncoder), http.ServerErrorLogger(logger), http.ServerBefore(opentracing.HTTPToContext(tracer, "DeleteCoupon", logger))},
		"PostAttendance":   {http.ServerErrorEncoder(http1.ErrorEncoder), http.ServerErrorLogger(logger), http.ServerBefore(opentracing.HTTPToContext(tracer, "PostAttendance", logger))},
		"PostCoupon":       {http.ServerErrorEncoder(http1.ErrorEncoder), http.ServerErrorLogger(logger), http.ServerBefore(opentracing.HTTPToContext(tracer, "PostCoupon", logger))},
		"UnpostAttendance": {http.ServerErrorEncoder(http1.ErrorEncoder), http.ServerErrorLogger(logger), http.ServerBefore(opentracing.HTTPToContext(tracer, "UnpostAttendance", logger))},
		"ViewAbsent":       {http.ServerErrorEncoder(http1.ErrorEncoder), http.ServerErrorLogger(logger), http.ServerBefore(opentracing.HTTPToContext(tracer, "ViewAbsent", logger))},
		"ViewPresent":      {http.ServerErrorEncoder(http1.ErrorEncoder), http.ServerErrorLogger(logger), http.ServerBefore(opentracing.HTTPToContext(tracer, "ViewPresent", logger))},
	}
	return options
}
func addDefaultEndpointMiddleware(logger log.Logger, duration *prometheus.Summary, mw map[string][]endpoint1.Middleware) {
	mw["PostAttendance"] = []endpoint1.Middleware{endpoint.LoggingMiddleware(log.With(logger, "method", "PostAttendance")), endpoint.InstrumentingMiddleware(duration.With("method", "PostAttendance"))}
	mw["PostCoupon"] = []endpoint1.Middleware{endpoint.LoggingMiddleware(log.With(logger, "method", "PostCoupon")), endpoint.InstrumentingMiddleware(duration.With("method", "PostCoupon"))}
	mw["DeleteCoupon"] = []endpoint1.Middleware{endpoint.LoggingMiddleware(log.With(logger, "method", "DeleteCoupon")), endpoint.InstrumentingMiddleware(duration.With("method", "DeleteCoupon"))}
	mw["UnpostAttendance"] = []endpoint1.Middleware{endpoint.LoggingMiddleware(log.With(logger, "method", "UnpostAttendance")), endpoint.InstrumentingMiddleware(duration.With("method", "UnpostAttendance"))}
	mw["ViewPresent"] = []endpoint1.Middleware{endpoint.LoggingMiddleware(log.With(logger, "method", "ViewPresent")), endpoint.InstrumentingMiddleware(duration.With("method", "ViewPresent"))}
	mw["ViewAbsent"] = []endpoint1.Middleware{endpoint.LoggingMiddleware(log.With(logger, "method", "ViewAbsent")), endpoint.InstrumentingMiddleware(duration.With("method", "ViewAbsent"))}
}
func addDefaultServiceMiddleware(logger log.Logger, mw []service.Middleware) []service.Middleware {
	return append(mw, service.LoggingMiddleware(logger))
}
func addEndpointMiddlewareToAllMethods(mw map[string][]endpoint1.Middleware, m endpoint1.Middleware) {
	methods := []string{"PostAttendance", "PostCoupon", "DeleteCoupon", "UnpostAttendance", "ViewPresent", "ViewAbsent"}
	for _, v := range methods {
		mw[v] = append(mw[v], m)
	}
}
