declare namespace startExpressServer {
  export interface Server {
    close(): Promise<void>
    url: string
  }
}

declare function startExpressServer(modulePath: string): Promise<startExpressServer.Server>

export = startExpressServer
