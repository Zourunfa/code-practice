import React from "react"

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = { hasError: false}
    }

    static getDerivedStateFromError(error){
        // 更新state 使下一次渲染能够显示降级UI
        return { hasError: true}
    }
    componentDidCatch(error,errorInfo){
        // 你同样可以将错误日志上报给服务器
        logErrorToMyService(error, errorInfo)
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

class ErrorBoundary2 extends React.Component{
    constructor(props){
        super(props);
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够降级UI
        return { hasError: true}
    }
    componentDidCatch(error, errorInfo){
        logErrorToMyService(error, errorInfo)
    }
    render() {
        if (this.state.hasError) {
            return <h1> Something went wrong</h1>
        }
        return this.props.children;
    }

}
// getDerivedStateFromError getDerivedStateFromError
// getDerivedStateFromError getDerivedStateFromError
// getDerivedStateFromError getDerivedStateFromError
// getDerivedStateFromError getDerivedStateFromError
// getDerivedStateFromError getDerivedStateFromError
// getDerivedStateFromError getDerivedStateFromError
// getDerivedStateFromError getDerivedStateFromError
// getDerivedStateFromError 


/**
 * 1.错误边界只能捕获子组件树的错误：错误边界无法捕获自身抛出的错误，如果一个错误边界
 * 无法渲染错误信息，则错误会冒泡至最近的上层的错误边界
 * 2.错误边界只能捕获React生命周期和渲染中的错误，下面错误无法捕获:
 *    事件处理器中的错误 event handlers/ try catch
 *    异步代码 setTimeout或requestAnimationFrame 回调
 *    服务端渲染 （server-side rendering）
 *    错误边界自身抛出的错误 （而不是子组件）
 * 3.错误边界与try/catch的区别： try/catch用于命令式代码，而错误边界用于React组件声明的代码 
 * 4.错误边界的位置你可以将错误边界放置在任何你需要的地方。你可以将一个错误边界包裹整个应用，以显示一个“Something went wrong”的消息，也可以单独包裹每个组件，以保护应用的其他部分。
 */

